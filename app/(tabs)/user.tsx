import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function UserScreen() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Text>UserScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default UserScreen;
