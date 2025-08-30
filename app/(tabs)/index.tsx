import HomeNavBar from '@/components/ui/HomeNavBar';
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, YStack } from "tamagui";

function MessageScreen() {

  return (
    <SafeAreaView style={ styles.container }>
      <HomeNavBar title="消息" ></HomeNavBar>

      <YStack style={ styles.container } background="$background">
        <Text>MessageScreen</Text>

        <YStack bg="$background" p="$4">
          <Text color="$color">This is accent theme</Text>
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
