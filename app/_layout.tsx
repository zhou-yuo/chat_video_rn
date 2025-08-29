import useCommonStore from "@/stores/useCommonStore";
import tamaguiConfig from "@/tamagui.config"; // 你的 Tamagui 配置文件
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { TamaguiProvider } from "tamagui";
import "../tamagui-web.css";
import SplashScreen from "./splash";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
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
        <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <SplashScreen />
            <StatusBar style="auto" />
          </ThemeProvider>
        </TamaguiProvider>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
         <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
        </ThemeProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
