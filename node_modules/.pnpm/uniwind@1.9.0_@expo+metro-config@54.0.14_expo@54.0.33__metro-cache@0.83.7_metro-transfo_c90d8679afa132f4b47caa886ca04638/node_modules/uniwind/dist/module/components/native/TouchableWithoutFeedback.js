import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { TouchableWithoutFeedback as RNTouchableWithoutFeedback } from "react-native";
import { copyComponentProperties } from "../utils.js";
import { useStyle } from "./useStyle.js";
export const TouchableWithoutFeedback = copyComponentProperties(RNTouchableWithoutFeedback, (props) => {
  const [isPressed, setIsPressed] = useState(false);
  const state = {
    isDisabled: Boolean(props.disabled),
    isPressed
  };
  const style = useStyle(props.className, props, state);
  return /* @__PURE__ */ jsx(
    RNTouchableWithoutFeedback,
    {
      ...props,
      style: [style, props.style],
      onPressIn: (event) => {
        setIsPressed(true);
        props.onPressIn?.(event);
      },
      onPressOut: (event) => {
        setIsPressed(false);
        props.onPressOut?.(event);
      }
    }
  );
});
export default TouchableWithoutFeedback;
