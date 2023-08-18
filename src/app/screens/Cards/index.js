import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles";
import { colors } from "../../../themes/colors";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoBackButton from "../../components/GoBackButton";
import themeContext from "../../config/themeContext";
import { useContext } from "react";

const cards = [
  {
    id: 1,
    name: "BBVA",
    icon: "cc-visa",
    cardNumber: "4152 8000 9982 1283",
    dueDate: "03/28",
    holder: "Jorge Mireles Macías",
    url: require("src/assets/visa.png"),
  },
  {
    id: 2,
    name: "Mastercard",
    icon: "cc-mastercard",
    dueDate: "09/25",
    holder: "Juan Martínez Morales",
    cardNumber: "4152 8000 9982 3324",
    url: require("src/assets/mastercard.png"),
  },
  {
    id: 3,
    name: "Mastercard",
    icon: "cc-mastercard",
    holder: "Fernanda Reyes Martínez",
    dueDate: "07/27",
    cardNumber: "4152 8000 9982 6655",
    url: require("src/assets/mastercard.png"),
  },
];

const Cards = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  const mask = (value) => {
    return "****" + value.slice(-4);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="light-content"
      />

      <View>
        <GoBackButton navigation={navigation} />
      </View>

      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 20,
            marginBottom: 20,
            color: theme.text,
          }}
        >
          Tarjetas
        </Text>

        {cards.map((item) => (
          <Pressable
            key={item.id}
            style={{
              flexDirection: "row",
              paddingVertical: 15,
              borderBottomWidth: 1,
              alignItems: "center",
              justifyContent: "space-between",
              borderColor: theme.backgroundSecondary,
            }}
            onPress={() => navigation.navigate("CardDetails", { item })}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <Image source={item.url} style={{ width: 40, height: 25 }} />
              <Text
                style={{
                  fontSize: 18,
                  color: theme.text,
                }}
              >
                {item.name}
              </Text>
            </View>

            <View>
              <Text style={{ fontSize: 18, color: theme.textSecondary }}>
                {mask(item.cardNumber)}
              </Text>
            </View>
          </Pressable>
        ))}

        <Pressable
          onPress={() => navigation.navigate("AddCard")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? colors.yellow[200]
                : colors.yellow[300],
              padding: 12,
              marginTop: 20,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
        >
          <Ionicons name="add" size={25} />
          <Text>Agregar nueva tarjeta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
