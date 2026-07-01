/**
 * Custom createOrderedCSSStyleSheet that wraps RNW rules in @layer rnw
 * This ensures proper CSS cascade ordering with Tailwind v4 styles.
 */
declare const createOrderedCSSStyleSheet: (sheet: CSSStyleSheet | null) => {
    getTextContent: () => string;
    insert: (cssText: string, groupValue: number) => void;
};
export default createOrderedCSSStyleSheet;
