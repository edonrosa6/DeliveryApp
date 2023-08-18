import { Pressable, Text, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import themeContext from "../../config/themeContext";
import { useContext } from "react";

const ProfileList = ({ title, iconName, onPress }) => {
  const theme = useContext(themeContext);

  return (
    <Pressable
      style={[styles.principal, { borderColor: theme.backgroundSecondary }]}
      onPress={onPress}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Ionicons name={iconName} size={24} color={theme.textSecondary} />
        <Text style={{ fontSize: 18, color: theme.textSecondary }}>
          {title}
        </Text>
      </View>

      <MaterialIcons
        name="keyboard-arrow-right"
        size={28}
        color={theme.textSecondary}
      />
    </Pressable>
  );
};

export default ProfileList;
