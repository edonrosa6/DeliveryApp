import { View, Text } from "react-native";
import { colors } from "../../../themes/colors";
import { Ionicons } from "@expo/vector-icons";

const DetailsShipping = ({ item }) => {
  const { deliveryTime, shipping } = item;

  return (
    <View
      style={{
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: colors.gray[200],
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: 5 }}>
            <Ionicons name="md-alarm" size={19} color={colors.black[400]} />
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: colors.black[400],
            }}
          >
            Tiempo de Entrega
          </Text>
        </View>
        <Text
          style={{
            marginLeft: 10,
            color: colors.yellow[500],
            fontWeight: "600",
          }}
        >
          {deliveryTime}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="md-bicycle" size={19} color={colors.black[400]} />
          <Text
            style={{
              marginLeft: 5,
              fontWeight: "bold",
              color: colors.black[400],
            }}
          >
            Envío
          </Text>
        </View>

        <Text
          style={{
            color: colors.yellow[500],
            fontWeight: "600",
            marginLeft: 10,
          }}
        >
          {shipping ? "$" + shipping : "Gratis"}
        </Text>
      </View>
    </View>
  );
};

export default DetailsShipping;
