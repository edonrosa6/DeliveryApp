import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const LinearGradientBg = ({ item }) => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("DetailsFood", { item })}
        style={({ pressed }) => [
          {
            width: "100%",
            borderRadius: 20,
            transform: [{ scale: pressed ? 0.92 : 1 }],
          },
        ]}
      >
        <View style={styles.shadowProp}>
          <LinearGradient
            colors={["#f1f1f1", "#fff"]}
            style={[
              {
                width: 150,
                flexDirection: "row",
                marginRight: 10,
                marginTop: 10,
                borderRadius: 20,
              },
            ]}
          >
            <Image
              source={item.url}
              style={{ width: "100%", height: 100, borderRadius: 13 }}
            />
          </LinearGradient>
        </View>

        <Text style={styles.titleBanner}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

export default LinearGradientBg;
