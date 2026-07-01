"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.KeyboardAvoidingView = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var _reactNative = require("react-native");
var _utils = require("../utils");
var _useStyle = require("./useStyle");
const KeyboardAvoidingView = exports.KeyboardAvoidingView = (0, _utils.copyComponentProperties)(_reactNative.KeyboardAvoidingView, props => {
  const style = (0, _useStyle.useStyle)(props.className, props);
  const contentContainerStyle = (0, _useStyle.useStyle)(props.contentContainerClassName, props);
  return /* @__PURE__ */(0, _jsxRuntime.jsx)(_reactNative.KeyboardAvoidingView, {
    ...props,
    style: [style, props.style],
    contentContainerStyle: [contentContainerStyle, props.contentContainerStyle]
  });
});
module.exports = KeyboardAvoidingView;