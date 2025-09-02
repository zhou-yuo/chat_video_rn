import ContactsListItem from '@/components/ui/contacts/ContactsListItem';
import HomeNavBar from '@/components/ui/HomeNavBar';
import TextTicker from '@/components/ui/TextTicker';
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizableText, YStack } from "tamagui";

function MessageScreen() {
  return (
    <SafeAreaView style={ styles.container }>
      <HomeNavBar title="消息" ></HomeNavBar>

      <YStack style={ styles.container } background="$background">
        <TextTicker text="Super long piece of text is long. The quick brown fox jumps over the lazy dog." />
        
        <SizableText>MessageScreen</SizableText>

        <YStack bg="$background" p="$4">
          <SizableText color="$accentColor">This is accent theme</SizableText>
        </YStack>

        <ContactsListItem></ContactsListItem>
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
