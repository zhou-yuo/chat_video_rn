import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function MovieScreen() {
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Text>MovieScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default MovieScreen;
