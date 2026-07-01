"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isStyleProperty = exports.isColorClassProperty = exports.isClassProperty = exports.classToStyle = exports.classToColor = void 0;
const classToStyle = className => className === "className" ? "style" : className.replace("ClassName", "Style");
exports.classToStyle = classToStyle;
const classToColor = className => className.replace("ClassName", "");
exports.classToColor = classToColor;
const isColorClassProperty = prop => prop.toLowerCase().includes("color") && prop.endsWith("ClassName");
exports.isColorClassProperty = isColorClassProperty;
const isClassProperty = prop => prop === "className" || prop.endsWith("ClassName");
exports.isClassProperty = isClassProperty;
const isStyleProperty = prop => prop === "style" || prop.endsWith("Style");
exports.isStyleProperty = isStyleProperty;