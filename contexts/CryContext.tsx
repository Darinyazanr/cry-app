/**
 * 今日流泪 - 全局状态管理
 */
import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { storageService, getTodayDate } from '../services/storage';
import { CryRecord, NotificationSettings } from '../models/CryRecord';
import { requestNotificationPermissions, scheduleDailyReminder } from '../services/notifications';

interface CryContextType {
  // 数据
  todayRecord: CryRecord | undefined;
  allRecords: CryRecord[];
  streak: number;
  totalDays: number;
  notificationSettings: NotificationSettings;
  
  // 状态
  isLoading: boolean;
  error: string | null;
  
  // 操作方法
  saveRecord: (smiled: boolean, reason?: string, photoUri?: string) => Promise<void>;
  deleteRecord: (date: string) => Promise<void>;
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => Promise<void>;
  refreshData: () => void;
}

const CryContext = createContext<CryContextType | undefined>(undefined);

interface CryProviderProps {
  children: ReactNode;
}

export function CryProvider({ children }: CryProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [todayRecord, setTodayRecord] = useState<CryRecord | undefined>();
  const [allRecords, setAllRecords] = useState<CryRecord[]>([]);
  const [streak, setStreak] = useState(0);
  const [totalDays, setTotalDays] = useState(0);
  const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>({
    enabled: true,
    hour: 21,
    minute: 0,
  });

  /**
   * 刷新数据
   */
  const refreshData = useCallback(async () => {
    setTodayRecord(await storageService.getTodayRecord());
    setAllRecords(await storageService.getAllRecords());
    setStreak(await storageService.getStreak());
    setTotalDays(await storageService.getTotalDays());
    const settings = await storageService.getSettings();
    setNotificationSettings(settings.notification);
  }, []);

  /**
   * 初始化
   */
  useEffect(() => {
    const init = async () => {
      try {
        await storageService.init();
        
        // 请求通知权限
        const hasPermission = await requestNotificationPermissions();
        if (hasPermission) {
          const settings = await storageService.getSettings();
          if (settings.notification.enabled) {
            await scheduleDailyReminder(settings.notification);
          }
        }

        refreshData();
      } catch (error) {
        console.error('Init error:', error);
        setError(error instanceof Error ? error.message : '初始化失败');
      } finally {
        setIsLoading(false);
      }
    };

    init();
  }, [refreshData]);

  /**
   * 保存打卡记录
   */
  const saveRecord = useCallback(async (
    smiled: boolean,
    reason?: string,
    photoUri?: string
  ) => {
    const today = getTodayDate();
    await storageService.saveRecord(today, smiled, reason, photoUri);
    refreshData();
  }, [refreshData]);

  /**
   * 删除打卡记录
   */
  const deleteRecord = useCallback(async (date: string) => {
    await storageService.deleteRecord(date);
    refreshData();
  }, [refreshData]);

  /**
   * 更新通知设置
   */
  const updateNotificationSettings = useCallback(async (
    settings: Partial<NotificationSettings>
  ) => {
    const newSettings = {
      ...notificationSettings,
      ...settings,
    };
    await storageService.updateNotificationSettings(newSettings);
    
    // 更新通知
    await scheduleDailyReminder(newSettings);
    
    refreshData();
  }, [notificationSettings, refreshData]);

  const value: CryContextType = {
    todayRecord,
    allRecords,
    streak,
    totalDays,
    notificationSettings,
    isLoading,
    error,
    saveRecord,
    deleteRecord,
    updateNotificationSettings,
    refreshData,
  };

  return (
    <CryContext.Provider value={value}>
      {children}
    </CryContext.Provider>
  );
}

/**
 * 使用流泪上下文
 */
export function useCry(): CryContextType {
  const context = useContext(CryContext);
  if (!context) {
    throw new Error('useCry must be used within a CryProvider');
  }
  return context;
}
