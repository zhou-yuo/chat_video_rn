import { HapticTab } from '@/components/HapticTab';
import { Compass, MessageCircle, TvMinimalPlay, UserRound, UsersRound } from '@tamagui/lucide-icons';

import { Tabs } from 'expo-router';
import React from 'react';
import { useTheme } from 'tamagui';

export default function TabLayout() {

  const theme = useTheme();
  console.log("🚀 ~ TabLayout ~ theme:", theme)

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accentColor.get(),
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: () => (<View style={{ background: '$background' }}></View>),
        // tabBarStyle: {
        //   position: 'absolute',
        // },
        tabBarIconStyle: {
          width: 24,
          height: 24,
          marginBottom: 2,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          lineHeight: 12,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '消息',
          tabBarIcon: ({ focused }) => <MessageCircle size={24} color={ focused ? '$accentColor' : '$color10' } />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: '通讯录',
          tabBarIcon: ({ focused }) => <UsersRound size={24} color={ focused ? '$accentColor' : '$color10' }/>,
        }}
      />
      <Tabs.Screen
        name="movie"
        options={{
          title: '视频',
          tabBarIcon: ({ focused }) => <TvMinimalPlay size={24} color={ focused ? '$accentColor' : '$color10' } />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: '发现',
          tabBarIcon: ({ focused }) =><Compass size={24} color={ focused ? '$accentColor' : '$color10' } />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '我的',
          tabBarIcon: ({ focused }) => <UserRound size={24} color={ focused ? '$accentColor' : '$color10' } />,
        }}
      />
    </Tabs>
  );
}
