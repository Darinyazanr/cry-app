import { jsx } from "react/jsx-runtime";
import { Animated as RNAnimated } from "react-native";
import { FlatList } from "./FlatList.js";
import { Image } from "./Image.js";
import { ScrollView } from "./ScrollView.js";
import { SectionList } from "./SectionList.js";
import { Text } from "./Text.js";
import { View } from "./View.js";
export const Animated = {
  ...RNAnimated,
  FlatList: RNAnimated.createAnimatedComponent((props) => /* @__PURE__ */ jsx(FlatList, { scrollEventThrottle: 1e-4, ...props })),
  ScrollView: RNAnimated.createAnimatedComponent((props) => /* @__PURE__ */ jsx(ScrollView, { scrollEventThrottle: 1e-4, ...props })),
  SectionList: RNAnimated.createAnimatedComponent((props) => /* @__PURE__ */ jsx(SectionList, { scrollEventThrottle: 1e-4, ...props })),
  Image: RNAnimated.createAnimatedComponent(Image),
  Text: RNAnimated.createAnimatedComponent(Text),
  View: RNAnimated.createAnimatedComponent(View)
};
