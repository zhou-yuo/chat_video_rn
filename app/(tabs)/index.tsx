import HomeNavBar from '@/components/ui/HomeNavBar';
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizableText, YStack } from "tamagui";

function MessageScreen() {

  return (
    <SafeAreaView style={ styles.container }>
      <HomeNavBar title="消息" ></HomeNavBar>

      <YStack style={ styles.container } background="$background">
        <SizableText>MessageScreen</SizableText>

        <YStack bg="$background" p="$4">
          <SizableText color="$color">This is accent theme</SizableText>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessageScreen;
