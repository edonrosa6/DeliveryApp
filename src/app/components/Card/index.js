import React from "react";
import { Text, View, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { colors } from "../../../themes/colors";

const Card = ({ item, theme }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("DetailsFood", { item })}
      style={({ pressed }) => [
        {
          width: 150,
          borderRadius: 20,
          marginRight: 10,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
    >
      <View style={styles.shadowProp}>
        <View style={styles.bgImage}>
          <Image source={item.url} style={styles.image} />
          {item.off ? (
            <View
              style={{
                position: "absolute",
                top: 5,
                left: 5,
                backgroundColor: colors.yellow[300],
                borderRadius: 100,
                padding: 3,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: colors.black[400],
                  fontWeight: "900",
                }}
              >
                {item.off}% OFF
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      <View>
        <Text style={[styles.titleBanner, { color: theme.textSecondary }]}>
          {item.name}
        </Text>
      </View>
    </Pressable>
  );
};

export default Card;
