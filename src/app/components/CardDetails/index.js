import { Image, Text, View } from "react-native";
import { colors } from "../../../themes/colors";

const CardDetails = ({ item }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: colors.gray[600],
          padding: 1,
          borderRadius: 15,
        }}
      >
        <Image
          source={item.url}
          style={{ borderRadius: 15, width: "100%", height: 120 }}
        />
      </View>
      <Text
        style={{
          marginTop: 8,
          color: colors.black[400],
          fontSize: 16,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          color: colors.black[400],
        }}
      >
        {item.price ? "$" + item.price + ".00" : "Gratis"}
      </Text>
    </View>
  );
};

export default CardDetails;
