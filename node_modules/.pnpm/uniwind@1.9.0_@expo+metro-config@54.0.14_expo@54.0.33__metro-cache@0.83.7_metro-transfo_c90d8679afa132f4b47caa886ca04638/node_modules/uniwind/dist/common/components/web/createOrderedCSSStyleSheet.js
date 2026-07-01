"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createOrderedCSSStyleSheet = _interopRequireDefault(require("react-native-web/dist/exports/StyleSheet/dom/createOrderedCSSStyleSheet"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const createOrderedCSSStyleSheet = sheet => {
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
  const originalLayered = (0, _createOrderedCSSStyleSheet.default)(layerRule);
  const original = (0, _createOrderedCSSStyleSheet.default)(fakeSheet);
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
module.exports = createOrderedCSSStyleSheet;