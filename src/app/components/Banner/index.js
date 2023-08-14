import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { LinearGradient } from "expo-linear-gradient";

const Banner = () => {
  return (
    <View
      style={[
        styles.bgBannerOff,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          alignItems: "center",
          height: 150,
        },
      ]}
    >
      <View
        style={{
          padding: 20,
          width: "50%",
          borderRadius: 100,
          backgroundColor: colors.gray[200],
        }}
      >
        <Text style={styles.titleOff}>50% OFF</Text>
        <Text style={styles.descOff}>Descuento en diferentes tiendas.</Text>
        <Pressable
          style={({ pressed }) => [
            {
              transform: [{ scale: pressed ? 0.92 : 1 }],
            },
          ]}
        >
          <LinearGradient
            colors={[colors.yellow[200], colors.yellow[300]]}
            style={styles.btnOrdenar}
          >
            <Text style={styles.txtOrdenar}>Ordenar</Text>
          </LinearGradient>
        </Pressable>
      </View>

      <View style={{ width: "50%" }}>
        <Image
          source={require("assets/pizza.webp")}
          style={{ width: "100%", height: "100%", borderRadius: 20 }}
        />
      </View>
    </View>
  );
};

export default Banner;
