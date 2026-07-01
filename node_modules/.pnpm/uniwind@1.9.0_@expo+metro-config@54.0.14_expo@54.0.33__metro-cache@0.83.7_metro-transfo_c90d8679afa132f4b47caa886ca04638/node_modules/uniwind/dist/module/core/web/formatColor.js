import { formatHex, formatHex8, parse } from "culori";
export const formatColor = (color) => {
  const parsedColor = parse(color);
  if (!parsedColor) {
    return color;
  }
  return parsedColor.alpha !== void 0 && parsedColor.alpha !== 1 ? formatHex8(parsedColor) : formatHex(parsedColor);
};
