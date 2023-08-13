import { View, Text } from "react-native";
import { colors } from "../../../themes/colors";

const DetailsFood = ({ route, navigation }) => {
  const { name, description } = route.params.item;
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={{ color: colors.black[400] }}>{name}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default DetailsFood;
