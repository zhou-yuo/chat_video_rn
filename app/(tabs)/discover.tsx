import HomeNavBar from "@/components/ui/HomeNavBar";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizableText, YStack } from "tamagui";

function DiscoverScreen() {
  return (
    <SafeAreaView>
      <HomeNavBar title="发现"></HomeNavBar>

      <YStack style={styles.container} background="$background">
        <SizableText>DiscoverScreen</SizableText>
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DiscoverScreen;
