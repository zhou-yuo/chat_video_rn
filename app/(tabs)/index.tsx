import {
  TopNavigation
} from "@ui-kitten/components";

import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MessageScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation
        alignment="center"
        title="Eva Application"
      />

      <View style={{ flex: 1 }}>
        <Text>MessageScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default MessageScreen;
