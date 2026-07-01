import { jsx } from "react/jsx-runtime";
import { KeyboardAvoidingView as RNKeyboardAvoidingView } from "react-native";
import { copyComponentProperties } from "../utils.js";
import { useStyle } from "./useStyle.js";
export const KeyboardAvoidingView = copyComponentProperties(RNKeyboardAvoidingView, (props) => {
  const style = useStyle(props.className, props);
  const contentContainerStyle = useStyle(props.contentContainerClassName, props);
  return /* @__PURE__ */ jsx(
    RNKeyboardAvoidingView,
    {
      ...props,
      style: [style, props.style],
      contentContainerStyle: [contentContainerStyle, props.contentContainerStyle]
    }
  );
});
export default KeyboardAvoidingView;
