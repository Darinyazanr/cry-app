"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBoxShadow = void 0;
const boxShadowRegex = /(?<![#\w.-])[+-]?(?:\d*\.\d+|\d+)(?![\w-])/g;
const undefinedRegex = /undefined/g;
const parseBoxShadow = boxShadow => boxShadow.replace(boxShadowRegex, match => `${match}px`).replace(undefinedRegex, "");
exports.parseBoxShadow = parseBoxShadow;