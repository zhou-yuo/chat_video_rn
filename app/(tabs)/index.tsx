import { getMessageList } from '@/api/message';
import ContactsList from '@/components/ui/contacts/ContactsList';
import { ContactsInfoType } from '@/components/ui/contacts/types';
import HomeNavBar from '@/components/ui/HomeNavBar';
import TextTicker from '@/components/ui/TextTicker';
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SizableText, YStack } from "tamagui";


function MessageScreen() {
  const [ list, setList ] = useState<ContactsInfoType[]>([]);

  const initData = async () => {
    try {
      // data 的类型被自动推断为 UserInfo
      const data = await getMessageList();
      console.log("🚀 ~ initData ~ data:", data)
      setList(data.list || [])
    } catch (error) {
      console.error('获取用户信息失败:', error);
    }
  } 

  useEffect(() => {
    initData()
  }, [setList])

  return (
    <SafeAreaView style={ styles.container }>
      <HomeNavBar title="消息" ></HomeNavBar>

      <YStack style={ styles.container } background="$background">
        <TextTicker text="Super long piece of text is long. The quick brown fox jumps over the lazy dog." />
        
        <SizableText>MessageScreen</SizableText>

        <YStack bg="$background" p="$4">
          <SizableText color="$accentColor">This is accent theme</SizableText>
        </YStack>

        <ContactsList list={list}></ContactsList>
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
