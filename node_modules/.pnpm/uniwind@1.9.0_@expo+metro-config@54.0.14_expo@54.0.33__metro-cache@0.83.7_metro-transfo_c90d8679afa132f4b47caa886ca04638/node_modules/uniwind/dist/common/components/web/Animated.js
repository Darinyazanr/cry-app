"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Animated = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var _reactNative = require("react-native");
var _FlatList = require("./FlatList");
var _Image = require("./Image");
var _ScrollView = require("./ScrollView");
var _SectionList = require("./SectionList");
var _Text = require("./Text");
var _View = require("./View");
const Animated = exports.Animated = {
  ..._reactNative.Animated,
  FlatList: _reactNative.Animated.createAnimatedComponent(props => /* @__PURE__ */(0, _jsxRuntime.jsx)(_FlatList.FlatList, {
    scrollEventThrottle: 1e-4,
    ...props
  })),
  ScrollView: _reactNative.Animated.createAnimatedComponent(props => /* @__PURE__ */(0, _jsxRuntime.jsx)(_ScrollView.ScrollView, {
    scrollEventThrottle: 1e-4,
    ...props
  })),
  SectionList: _reactNative.Animated.createAnimatedComponent(props => /* @__PURE__ */(0, _jsxRuntime.jsx)(_SectionList.SectionList, {
    scrollEventThrottle: 1e-4,
    ...props
  })),
  Image: _reactNative.Animated.createAnimatedComponent(_Image.Image),
  Text: _reactNative.Animated.createAnimatedComponent(_Text.Text),
  View: _reactNative.Animated.createAnimatedComponent(_View.View)
};