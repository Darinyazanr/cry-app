"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _boxShadow = require("./boxShadow");
Object.keys(_boxShadow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _boxShadow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _boxShadow[key];
    }
  });
});
var _fontVariant = require("./fontVariant");
Object.keys(_fontVariant).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _fontVariant[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _fontVariant[key];
    }
  });
});
var _gradient = require("./gradient");
Object.keys(_gradient).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _gradient[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _gradient[key];
    }
  });
});
var _textShadow = require("./textShadow");
Object.keys(_textShadow).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _textShadow[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _textShadow[key];
    }
  });
});
var _transforms = require("./transforms");
Object.keys(_transforms).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _transforms[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _transforms[key];
    }
  });
});