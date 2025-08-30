import HomeNavBar from '@/components/ui/HomeNavBar';
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizableText, YStack } from "tamagui";

function ContactScreen() {
  return (
    <SafeAreaView style={ styles.container }>
      <HomeNavBar title='通讯录'></HomeNavBar>
      <YStack style={ styles.container } background="$background">
        <SizableText>ContactScreen</SizableText>
      </YStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactScreen;
