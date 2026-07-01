"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseFontVariant = void 0;
const parseFontVariant = fontVariant => fontVariant.split(" ").filter(token => token !== "undefined");
exports.parseFontVariant = parseFontVariant;