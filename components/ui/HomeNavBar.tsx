import NavBar, { styles as nabBarStyles } from "@/components/ui/NavBar";
import {
  PlusCircle,
  ScanLine,
  Search,
  UserPlus,
  UsersRound
} from "@tamagui/lucide-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Popover, SizableText, Text, View, YStack } from "tamagui";

interface PropsType {
  title: string;
}

function HomeNavBar(props: PropsType) {
  const { title } = props;

  /**
   * 发起群聊
   */
  const handleStratGroupChat = () => {}

  /**
   * 添加好友
   */
  const handleAddFriend = () => {}

  /**
   * 扫一扫
   */
  const handleScan = () => {}

  const actions = [
    <TouchableOpacity key={1} style={nabBarStyles.navBarBtn}>
      <Search size={22} color="$color" />
    </TouchableOpacity>,
    <Popover
      key={2}
      size="$2"
      allowFlip
      stayInFrame
      offset={5}
      resize
      placement="bottom-end"
    >
      <Popover.Trigger asChild>
        <View style={nabBarStyles.navBarBtn}>
          <PlusCircle size={22} color="$color" />
        </View>
      </Popover.Trigger>
      <Popover.Content
        background="#4c4c4c"
        borderWidth={0}
        enterStyle={{ y: -10, opacity: 0 }}
        exitStyle={{ y: -10, opacity: 0 }}
        elevate
        animation={[
          "quick",
          {
            opacity: {
              overshootClamping: true,
            },
          },
        ]}
      >
        <Popover.Arrow size="$3" borderColor="#4c4c4c" background="#4c4c4c" />

        <YStack>
          <Popover.Close asChild style={{ outline: 'none', border: 'none' }} >
            <TouchableOpacity>
              <View style={styles.menuItem}>
                <UsersRound color="#fff" size={22} />
                <SizableText color='#fff' size='$4' fontWeight={400} >发起群聊</SizableText>
              </View>
            </TouchableOpacity>
          </Popover.Close>
          
          <Popover.Close asChild style={{ outline: 'none', border: 'none' }} >
            <TouchableOpacity>
              <View style={styles.menuItem}>
                <UserPlus color="#fff" size={22} />
                <SizableText color='#fff' size='$4' fontWeight={400} >添加好友</SizableText>
              </View>
            </TouchableOpacity>
          </Popover.Close>
          <Popover.Close asChild style={{ outline: 'none', border: 'none' }} >
            <TouchableOpacity>
              <View style={[styles.menuItem, { borderBottomWidth: 0 }]}>
                <ScanLine color="#fff" size={22} />
                <SizableText color='#fff' size='$4' fontWeight={400} >扫一扫</SizableText>
              </View>
            </TouchableOpacity>
          </Popover.Close>
        </YStack>
      </Popover.Content>
    </Popover>,
  ];

  return <NavBar goback={false} title={title} actions={actions}></NavBar>;
}

const styles = StyleSheet.create({
  menuItem: {
    borderBottomColor: "#6b6b6b",
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  menuItemText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default HomeNavBar;
