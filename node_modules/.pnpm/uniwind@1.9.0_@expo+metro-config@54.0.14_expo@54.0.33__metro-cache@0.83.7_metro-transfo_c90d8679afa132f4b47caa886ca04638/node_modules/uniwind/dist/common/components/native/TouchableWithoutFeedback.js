"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
module.exports = exports.TouchableWithoutFeedback = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _reactNative = require("react-native");
var _utils = require("../utils");
var _useStyle = require("./useStyle");
const TouchableWithoutFeedback = exports.TouchableWithoutFeedback = (0, _utils.copyComponentProperties)(_reactNative.TouchableWithoutFeedback, props => {
  const [isPressed, setIsPressed] = (0, _react.useState)(false);
  const state = {
    isDisabled: Boolean(props.disabled),
    isPressed
  };
  const style = (0, _useStyle.useStyle)(props.className, props, state);
  return /* @__PURE__ */(0, _jsxRuntime.jsx)(_reactNative.TouchableWithoutFeedback, {
    ...props,
    style: [style, props.style],
    onPressIn: event => {
      setIsPressed(true);
      props.onPressIn?.(event);
    },
    onPressOut: event => {
      setIsPressed(false);
      props.onPressOut?.(event);
    }
  });
});
module.exports = TouchableWithoutFeedback;