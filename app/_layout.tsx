import useCommonStore from "@/stores/useCommonStore";
import tamaguiConfig from "@/tamagui.config"; // 你的 Tamagui 配置文件
import { TamaguiProvider } from "@tamagui/core";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import SplashScreen from "./splash";

export default function RootLayout() {
  const commonStore = useCommonStore();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  if (commonStore.isSplash) {
    return (
      <GestureHandlerRootView>
        <TamaguiProvider config={tamaguiConfig}>
          <SplashScreen />
          <StatusBar style="auto" />
        </TamaguiProvider>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={tamaguiConfig}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
