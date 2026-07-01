"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatColor = void 0;
var _culori = require("culori");
const formatColor = color => {
  const parsedColor = (0, _culori.parse)(color);
  if (!parsedColor) {
    return color;
  }
  return parsedColor.alpha !== void 0 && parsedColor.alpha !== 1 ? (0, _culori.formatHex8)(parsedColor) : (0, _culori.formatHex)(parsedColor);
};
exports.formatColor = formatColor;