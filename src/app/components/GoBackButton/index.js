import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles";
import { colors } from "../../../themes/colors";
import themeContext from "../../config/themeContext";
import { useContext } from "react";

const GoBackButton = ({ navigation }) => {
  const theme = useContext(themeContext);

  return (
    <Pressable
      style={[
        globalStyles.btnGoBack,
        globalStyles.shadowProp,
        { backgroundColor: theme.backgroundSecondary },
      ]}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="md-arrow-back" size={25} color={theme.text} />
    </Pressable>
  );
};

export default GoBackButton;
