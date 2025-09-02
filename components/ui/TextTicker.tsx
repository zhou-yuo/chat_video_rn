import React from "react";
import { StyleSheet } from 'react-native';
import RNTextTicker from "react-native-text-ticker";
import { View, useTheme } from "tamagui";

interface PropsType {
  text: string
}

function TextTicker(props: PropsType) {
  const { text } = props
  const theme = useTheme()
  const accentColor = theme.accentColor.get();
  return (
    <View background='$accent12' borderColor='$accentColor' style={ styles.container }>
      <RNTextTicker
        style={{ fontSize: 14, color: accentColor }}
        scrollSpeed={20}
        loop
        bounce={false}
        repeatSpacer={50}
        marqueeDelay={1000}
      >
        {text}
      </RNTextTicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
  }
})

export default TextTicker;
