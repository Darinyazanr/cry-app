import { parse } from "culori";
import { formatColor } from "./formatColor.js";
export const parseCSSValue = (value) => {
  if (isNaN(Number(value)) && parse(value) !== void 0) {
    return formatColor(value);
  }
  return value;
};
