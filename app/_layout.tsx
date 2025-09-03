import { useColorScheme } from '@/hooks/useColorScheme';
import useAuthStore from '@/stores/useAuthStore';
import useCommonStore from '@/stores/useCommonStore';
import tamaguiConfig from '@/tamagui.config';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ReactElement } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import 'react-native-reanimated';
import { TamaguiProvider } from 'tamagui';
import LoginScreen from './login';
import SplashScreen from './splash';

function RootWrapper({ children }: { children: ReactElement }) {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          {children}
          <StatusBar style="auto" />
        </ThemeProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  const commonStore = useCommonStore();
  const authStore = useAuthStore();

  if (commonStore.isSplash) {
    return (
      <RootWrapper>
        <SplashScreen />
      </RootWrapper>
    );
  }

  if (!authStore.isLogin) {
    return (
      <RootWrapper>
        <LoginScreen />
      </RootWrapper>
    );
  }

  return (
    <RootWrapper>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </RootWrapper>
  );
}
