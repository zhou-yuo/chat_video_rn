import useAuthStore from '@/stores/useAuthStore';
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, SizableText, YStack } from "tamagui";

function UserScreen() {
  const authStore = useAuthStore()
  const userInfo = authStore.user;

  const handleLogout = () => {
    authStore.logout();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <YStack>
        <SizableText>UserInfo</SizableText>
        <SizableText fontWeight={400}>ID:{ userInfo && userInfo.id || '' }</SizableText>
        <SizableText fontWeight={400}>Name:{ userInfo && userInfo.name || '' }</SizableText>
        <Button onPress={() => handleLogout()}>Logout</Button>
      </YStack>
    </SafeAreaView>
  );
}

export default UserScreen;
