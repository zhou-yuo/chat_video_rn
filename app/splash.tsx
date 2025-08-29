import useCommonStore from "@/stores/useCommonStore";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const images = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
];
function SplashScreen() {
  const { setIsSplash } = useCommonStore();
  const insets = useSafeAreaInsets()
  const [countDown, setCountDown] = useState<number>(2);

  useEffect(() => {
    /**
     * 初始化倒计时
     */
    const timer = setInterval(() => {
      setCountDown((prev) => {
        const nextCount = prev - 1;
        if (nextCount <= 0) {
          clearInterval(timer);
          setIsSplash(false)
          return 0;
        }
        return nextCount;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /**
   * 点击进入
   * @returns 
   */
  const handleEnter = () => {
    if(countDown > 0) {
      return
    }
    setIsSplash(false)
  }

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 轮播图 */}
      <Carousel
        loop={true}
        width={screenWidth}
        height={screenHeight}
        autoPlay={true}
        data={images}
        renderItem={renderItem}
      />

      <TouchableOpacity style={[ styles.enterBtn, { top: insets.top + 20 } ]} onPress={() => handleEnter()}>
        <View>
          <Text style={ styles.enterbtnText }>{ countDown > 0 ? `${countDown}s` : '进入' }</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: screenWidth,
    height: screenHeight,
  },
  enterBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    height: 24,
    width: 50,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 12,
  },
  enterbtnText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default SplashScreen;
