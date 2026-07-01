import originalCreateOrderedCSSStyleSheet from "react-native-web/dist/exports/StyleSheet/dom/createOrderedCSSStyleSheet";
const createOrderedCSSStyleSheet = (sheet) => {
  let layerRule = null;
  let fakeSheet = null;
  if (sheet !== null) {
    if (typeof CSSLayerBlockRule !== "undefined" && sheet.cssRules[0] instanceof CSSLayerBlockRule) {
      layerRule = sheet.cssRules[0];
    } else {
      const layerIndex = sheet.insertRule("@layer rnw {}", 0);
      layerRule = sheet.cssRules[layerIndex];
    }
    fakeSheet = {
      // Increment index by 1 to skip the layer rule
      insertRule: (text, index) => sheet.insertRule(text, index === void 0 ? 1 : index + 1),
      get cssRules() {
        return Array.from(sheet.cssRules).slice(1);
      }
    };
  }
  const originalLayered = originalCreateOrderedCSSStyleSheet(layerRule);
  const original = originalCreateOrderedCSSStyleSheet(fakeSheet);
  return {
    getTextContent: () => {
      return `@layer rnw { ${originalLayered.getTextContent()} }
${original.getTextContent()}`;
    },
    insert: (cssText, groupValue) => {
      if (groupValue <= 1) {
        originalLayered.insert(cssText, groupValue);
        return;
      }
      original.insert(cssText, groupValue);
    }
  };
};
export default createOrderedCSSStyleSheet;
