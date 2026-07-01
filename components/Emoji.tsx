import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

// 😢 哭了 / 😐 没哭
const EMOJI_CRY = '\u{1F622}';   // 😢
const EMOJI_NEUTRAL = '\u{1F610}'; // 😐

export const CRY = EMOJI_CRY;
export const NEUTRAL = EMOJI_NEUTRAL;

export type MoodType = 'cried' | 'notCried';

interface MoodEmojiProps {
  type: MoodType;
  size?: number;
  style?: StyleProp<TextStyle>;
}

export const MoodEmoji: React.FC<MoodEmojiProps> = ({ type, size = 48, style }) => {
  const emoji = type === 'cried' ? EMOJI_CRY : EMOJI_NEUTRAL;
  return (
    <Text style={[{ fontSize: size, textAlign: 'center' }, style]}>
      {emoji}
    </Text>
  );
};
