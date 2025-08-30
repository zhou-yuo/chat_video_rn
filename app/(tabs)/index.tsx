import { ChevronLeft, MoreVertical, PlusCircle } from "@tamagui/lucide-icons";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, XStack, YStack, useTheme } from "tamagui";

function MessageScreen() {
  const theme = useTheme();
  const bgColor = theme.background.get();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} background='$background'>
        <YStack>
          <XStack
            background="$background"
            height={44}
            gap={6}
            style={ styles.navBarContaier }
            borderBottomColor='$borderColor'
          >
            <XStack style={styles.navBarBtnContainer}>
              <TouchableOpacity>
                <View style={styles.navBarBtn}>
                  <ChevronLeft size={24} color="$color" />
                </View>
              </TouchableOpacity>
            </XStack>

            <YStack style={styles.navBarTitle}>
              <Text
                fontSize={16}
                fontWeight="bold"
                numberOfLines={1}
                color="$color"
              >
                主标题
              </Text>
              <Text fontSize={10} numberOfLines={1} color="$placeholderColor">
                副标题
              </Text>
            </YStack>

            <XStack style={styles.navBarBtnContainer}>
              <TouchableOpacity>
                <View style={styles.navBarBtn}>
                  <MoreVertical size={24} color="$color" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.navBarBtn}>
                  <PlusCircle size={24} color="$color" />
                </View>
              </TouchableOpacity>
            </XStack>
          </XStack>
        </YStack>

        <View style={{ flex: 1 }}>
          <Text>MessageScreen</Text>

          <YStack bg="$background" p="$4">
            <Text color="$color">This is accent theme</Text>
          </YStack>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navBarContaier: {
    alignItems: "center",
    borderBottomWidth: 1,
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

export default MessageScreen;
