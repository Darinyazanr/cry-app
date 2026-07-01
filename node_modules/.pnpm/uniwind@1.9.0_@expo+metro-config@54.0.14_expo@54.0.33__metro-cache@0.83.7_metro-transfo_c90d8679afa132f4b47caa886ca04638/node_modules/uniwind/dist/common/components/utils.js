"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.copyComponentProperties = void 0;
const copyComponentProperties = (Component, UniwindComponent) => {
  Object.entries(Component).forEach(([key, value]) => {
    if (["$$typeof", "render", "contextType"].includes(key)) {
      return;
    }
    UniwindComponent[key] = value;
  });
  UniwindComponent.displayName = Component.displayName;
  UniwindComponent.prototype = Object.getPrototypeOf(Component);
  return UniwindComponent;
};
exports.copyComponentProperties = copyComponentProperties;