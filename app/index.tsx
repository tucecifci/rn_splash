import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function SplashScreen() {
  const router = useRouter();
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 3000 });
    const timer = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[animatedStyle, styles.contentContainer]}>
        <Image
          source={require("../assets/images/girl1jpeg.jpeg")}
          style={styles.image}
        />
        <Text style={styles.text}>ÉTOILE</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B1389",
  },
  contentContainer: {
    gap: 16,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: 800,
    color: "#ECDFCF",
    letterSpacing: 10,
    textAlign: "center",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    resizeMode: "center",
  },
});
