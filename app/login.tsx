import useAuthStore, { UserType } from '@/stores/useAuthStore';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, H2, YStack } from 'tamagui';

function LoginScreen() {
  const authStore = useAuthStore()

  const handleLogin = () => {
    const token = 'aaa';
    const userInfo: UserType = {
      id: 1,
      name: 'User1',
      avatar: ''
    }
    authStore.login(token, userInfo)
  }

  return (
    <SafeAreaView>
      <YStack style={{ padding: 16 }}>
        <H2>Login</H2>
        <Button theme="accent" size='$4' onPress={() => handleLogin()}>Login</Button>
      </YStack>
    </SafeAreaView>
  )
}

export default LoginScreen;