import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Home() {
  return (
    <SafeAreaView className=" flex-1 items-center justify-center">
      <Text className="text-4xl font-semibold text-red-500">
        Welcome to Chat!
      </Text>
    </SafeAreaView>
  );
}
