import useCommonStore from "@/stores/useCommonStore";
import { default as darkTheme } from "@/themes/dark.json";
import { ThemeContext } from "@/themes/theme-context";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import SplashScreen from "./splash";

export default function RootLayout() {
  const commonStore = useCommonStore();

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

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
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={{ ...eva.dark, ...darkTheme }}>
            <SplashScreen />
            <StatusBar style="auto" />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...darkTheme }}>
          <Stack initialRouteName="(tabs)">
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </GestureHandlerRootView>
  );
}
