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
import CardDetails from "../../components/CardDetails";

const DetailsFood = ({ route, navigation }) => {
  const { name, description, url, id, off } = route.params.item;
  const desc = descuentos.filter((x) => x.foodId === id);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.bgHead}>
        <Image source={url} style={{ width: "100%", height: 200 }} />

        <Pressable style={styles.btnGoBack} onPress={() => navigation.goBack()}>
          <Ionicons name="md-arrow-back" size={25} color={colors.black[400]} />
        </Pressable>
      </View>

      <View>
        {off ? (
          <View
            style={{
              position: "absolute",
              right: 20,
              backgroundColor: colors.yellow[300],
              padding: 5,
              width: 90,
              borderTopWidth: 1,
              borderColor: colors.black[700],
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: "900", fontSize: 14 }}>{off}% OFF</Text>
          </View>
        ) : null}
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

        <View
          style={{
            marginVertical: 15,
            width: "100%",
            borderRadius: 12,
            paddingHorizontal: 15,
            paddingVertical: 10,
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
                <CardDetails item={item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default DetailsFood;
