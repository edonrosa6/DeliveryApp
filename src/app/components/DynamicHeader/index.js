import * as React from "react";
import { StyleSheet, Animated, Image, Text } from "react-native";

const Header_Max_Height = 200;
const Header_Min_Height = 70;

export default function DynamicHeader({ animHeaderValue, url }) {
  const animateHeaderHeight = animHeaderValue.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [Header_Max_Height, Header_Min_Height],
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[
        styles.header,
        {
          height: animateHeaderHeight,
        },
      ]}
    >
      <Image source={url} style={{ width: "100%" }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
  },
  headerText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
