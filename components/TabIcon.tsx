import { Image, ImageSourcePropType, View } from "react-native";

const TabIcon = ({
  source,
  focused,
}: {
  focused: boolean;
  source: ImageSourcePropType;
}) => (
  <View
    className={`flex flex-row justify-center items-center rounded-full ${focused ? "bg-general-300" : ""}`}
  >
    <View className={`rounded-full w-14 h-12 items-center justify-center ${focused ? 'bg-general-400' : ""}`}>
      <Image source={source} tintColor="white" resizeMode="contain" className="w-7 h-7"/>
    </View>
  </View>
);

export default TabIcon;
