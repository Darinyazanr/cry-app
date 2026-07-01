"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCSSValue = void 0;
var _culori = require("culori");
var _formatColor = require("./formatColor");
const parseCSSValue = value => {
  if (isNaN(Number(value)) && (0, _culori.parse)(value) !== void 0) {
    return (0, _formatColor.formatColor)(value);
  }
  return value;
};
exports.parseCSSValue = parseCSSValue;