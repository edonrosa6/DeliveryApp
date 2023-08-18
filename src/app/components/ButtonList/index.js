import { Pressable, Text } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../themes/colors";

const ButtonList = ({ title, handlePress, iconName }) => {
  return (
    <Pressable
      onPress={handlePress}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: colors.gray[300],
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: colors.black[400],
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <MaterialIcons name={iconName} size={28} color="black" />
    </Pressable>
  );
};

export default ButtonList;
