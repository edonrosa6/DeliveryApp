import {
  View,
  Text,
  Image,
  Button,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { descuentos } from "data/descuentos";

import DetailsShipping from "../../components/DetailsShipping";
import { colors } from "../../../themes/colors";

const DetailsFood = ({ route, navigation }) => {
  const { name, description, url, id } = route.params.item;
  const desc = descuentos.filter((x) => x.foodId === id);
  console.log(id);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgHead}>
        <Image source={url} style={{ width: "100%", height: 200 }} />
        <Pressable style={styles.btnGoBack} onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={25} color={colors.black[400]} />
        </Pressable>
      </View>

      <View style={{ marginVertical: 5, padding: 20 }}>
        <View>
          <Text
            style={{
              marginBottom: 5,
              color: colors.black[700],
              fontSize: 25,
              fontWeight: "900",
            }}
          >
            {name}
          </Text>
          <Text style={{ color: colors.black[400], marginBottom: 15 }}>
            {description}
          </Text>
        </View>

        <DetailsShipping item={route.params.item} />

        {/* Descuentos */}
        <View
          style={{
            marginVertical: 15,
            width: "100%",
            borderRadius: 12,
            padding: 10,
            backgroundColor: colors.gray[200],
          }}
        >
          <Text style={styles.subtitle}>Descuentos</Text>

          <FlatList
            style={{ width: "100%" }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={desc}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => navigation.navigate("BuyFood", { item })}
                style={{ marginRight: 15, width: 180 }}
              >
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
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailsFood;
