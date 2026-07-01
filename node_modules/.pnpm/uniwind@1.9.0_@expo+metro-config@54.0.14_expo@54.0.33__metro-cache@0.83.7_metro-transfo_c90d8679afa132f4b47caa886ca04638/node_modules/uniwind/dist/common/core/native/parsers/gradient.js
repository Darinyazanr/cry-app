"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveGradient = void 0;
const gradientDirectionTokens = /* @__PURE__ */new Set(["to", "top", "right", "bottom", "left"]);
const resolveGradient = value => {
  const tokens = value.split(", ");
  const directionToken = tokens.find(token => token.includes("to") || token.includes("deg"));
  const filtered = tokens.filter(token => token !== directionToken);
  const colorStops = filtered.map(token => {
    const [color, position] = token.split(" ");
    return {
      color,
      positions: position !== void 0 ? [position] : void 0
    };
  });
  const direction = directionToken?.split(" ").reduce((acc, token) => {
    if (gradientDirectionTokens.has(token) || token.includes("deg")) {
      return `${acc} ${token.replace(",", "")}`;
    }
    return acc;
  }, "").trim();
  return [{
    colorStops,
    type: "linear-gradient",
    direction
  }];
};
exports.resolveGradient = resolveGradient;