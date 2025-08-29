import { HapticTab } from '@/components/HapticTab';

import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import React from 'react';
import { getTokens, useTheme } from 'tamagui';

export default function TabLayout() {

  const tokens = getTokens();
  const theme = useTheme();
  const bgColor = theme.background.get()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tokens.color.$brand.val,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
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
        name="message"
        options={{
          title: '消息',
          tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: '通讯录',
          tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="movie"
        options={{
          title: '视频',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="movie-filter-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: '发现',
          tabBarIcon: ({ color }) =><Feather name="compass" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
