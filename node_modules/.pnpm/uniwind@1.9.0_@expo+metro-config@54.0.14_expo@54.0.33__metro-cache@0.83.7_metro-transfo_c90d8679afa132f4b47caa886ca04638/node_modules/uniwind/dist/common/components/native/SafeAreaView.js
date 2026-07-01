"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.SafeAreaView = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var _reactNative = require("react-native");
var _utils = require("../utils");
var _useStyle = require("./useStyle");
const SafeAreaView = exports.SafeAreaView = (0, _utils.copyComponentProperties)(_reactNative.SafeAreaView, props => {
  const style = (0, _useStyle.useStyle)(props.className, props);
  return /* @__PURE__ */(0, _jsxRuntime.jsx)(_reactNative.SafeAreaView, {
    ...props,
    style: [style, props.style]
  });
});
module.exports = SafeAreaView;