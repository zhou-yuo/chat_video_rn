import { ChevronLeft } from "@tamagui/lucide-icons";
import { router } from 'expo-router';
import React, { ReactElement } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SizableText, View, XStack, YStack } from "tamagui";

interface PropsType {
  title?: string,
  subTitle?: string,
  goback?: boolean,
  actions?: ReactElement[]
}

function NavBar(props: PropsType) {
  const { title = '', subTitle = '', goback = true, actions = [] }  = props;

  return (
    <XStack
      background="$background0"
      height={44}
      gap={6}
      style={styles.navBarContaier}
    >

      <XStack style={styles.navBarBtnContainer}>
        {
          goback && 
          <TouchableOpacity onPress={ () => router.back() }>
            <View style={styles.navBarBtn}>
              <ChevronLeft size={24} color="$color" />
            </View>
          </TouchableOpacity>
        }
      </XStack>

      <YStack style={styles.navBarTitle}>
        <SizableText color='$color' size='$5' fontWeight={700} >{ title }</SizableText>
        {
          subTitle ?
          <SizableText color='$placeholderColor' size='$1' fontWeight={400} >{ subTitle }</SizableText>
          : null
        }
      </YStack>

      <XStack style={styles.navBarBtnContainer}>
         {actions.map((action, index) => (
          <View key={index} style={ styles.navBarBtn }>
            { action }
          </View>
        ))}
      </XStack>
    </XStack>
  );
}

export const styles = StyleSheet.create({
  navBarContaier: {
    alignItems: "center",
  },
  navBarBtnContainer: {
    width: 88,
  },
  navBarBtn: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
  },
  navBarTitle: {
    flex: 1,
    alignItems: "center",
  },
});

export default NavBar;
