"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logger = void 0;
class Logger {
  static log(message) {
    console.log(`Uniwind - ${message}`);
  }
  static error(message) {
    console.error(`Uniwind - ${message}`);
  }
  static warn(message) {
    console.warn(`Uniwind - ${message}`);
  }
}
exports.Logger = Logger;