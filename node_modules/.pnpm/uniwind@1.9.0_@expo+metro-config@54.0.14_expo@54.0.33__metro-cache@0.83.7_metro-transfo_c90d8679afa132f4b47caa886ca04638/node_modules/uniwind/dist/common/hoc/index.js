"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _withUniwind = require("./withUniwind");
Object.keys(_withUniwind).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _withUniwind[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _withUniwind[key];
    }
  });
});