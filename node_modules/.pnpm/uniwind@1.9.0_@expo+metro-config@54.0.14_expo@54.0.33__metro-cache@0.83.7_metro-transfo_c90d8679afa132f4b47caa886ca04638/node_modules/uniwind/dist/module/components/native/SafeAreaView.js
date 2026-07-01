import { jsx } from "react/jsx-runtime";
import { SafeAreaView as RNSafeAreaView } from "react-native";
import { copyComponentProperties } from "../utils.js";
import { useStyle } from "./useStyle.js";
export const SafeAreaView = copyComponentProperties(RNSafeAreaView, (props) => {
  const style = useStyle(props.className, props);
  return /* @__PURE__ */ jsx(
    RNSafeAreaView,
    {
      ...props,
      style: [style, props.style]
    }
  );
});
export default SafeAreaView;
