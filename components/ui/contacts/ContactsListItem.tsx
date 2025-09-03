import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import ReanimatedSwipeable, { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";
import { Text, View } from "tamagui";

import { ContactsInfoType } from './types';

import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

interface PropsType {
  userInfo: ContactsInfoType
}

const actionsBtnSize = 50;

function RightAction({ prog, drag, closeSwipeable }: { prog: SharedValue<number>, drag: SharedValue<number>, closeSwipeable: () => void }) {

  const handleButtonPress = () => {
    closeSwipeable(); // Close the swipeable on button press
  };

  const styleAnimation = useAnimatedStyle(() => {
    // console.log('showRightProgress:', prog.value);
    // console.log('appliedTranslation:', drag.value);

    return {
      transform: [{ translateX: drag.value + (actionsBtnSize * 3) }],
    };
  });

  return (
    <View style={{ flexDirection: 'row', width: actionsBtnSize * 3 }}>
      <Reanimated.View style={[styleAnimation, styles.activesBtn]}>
        <Text style={styles.rightAction} onPress={handleButtonPress}>置顶</Text>
      </Reanimated.View>
      <Reanimated.View style={[styleAnimation, styles.activesBtn]}>
        <Text style={styles.rightAction} onPress={handleButtonPress}>删除</Text>
      </Reanimated.View>
      <Reanimated.View style={[styleAnimation, styles.activesBtn]}>
        <Text style={styles.rightAction} onPress={handleButtonPress}>清空</Text>
      </Reanimated.View>
    </View>
  );
}

function ContactsListItem(props: PropsType) {
  const { userInfo } = props;
  const { name } = userInfo || {};
  const swipeableRef = useRef<SwipeableMethods | null>(null);

  return (
    <ReanimatedSwipeable
      ref={swipeableRef}
      containerStyle={styles.swipeable}
      friction={2}
      enableTrackpadTwoFingerGesture
      rightThreshold={20}
      overshootRight={false}
      renderRightActions={
        (prog: SharedValue<number>, drag: SharedValue<number>) => <RightAction prog={prog} drag={drag} closeSwipeable={() => swipeableRef.current?.close()} />
      }
    >
      <Text>User {name ?? '--'}</Text>
    </ReanimatedSwipeable>
  );
}

export default ContactsListItem;

const styles = StyleSheet.create({
  rightAction: { 
    fontSize: 12,
    color: '#fff',
    height: actionsBtnSize,
    width: actionsBtnSize,
    textAlign: 'center',
    lineHeight: actionsBtnSize,
  },
  swipeable: {
    height: actionsBtnSize,
    backgroundColor: "papayawhip",
    alignItems: "center",
  },
  activesBtn: {
    backgroundColor: "purple",
  }
});
