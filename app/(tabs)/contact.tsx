import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function ContactScreen() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Text>ContactScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default ContactScreen;
