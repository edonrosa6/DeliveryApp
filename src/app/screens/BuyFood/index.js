import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { Ionicons } from "@expo/vector-icons";

const BuyFood = ({ route, navigation }) => {
  const { name, url, price } = route.params.item;

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgHead}>
        <Pressable style={styles.btnGoBack} onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={25} color={colors.black[400]} />
        </Pressable>
      </View>
    </View>
  );
};

export default BuyFood;
