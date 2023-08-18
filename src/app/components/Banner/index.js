import { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { LinearGradient } from "expo-linear-gradient";
import themeContext from "../../config/themeContext";

const Banner = () => {
  const theme = useContext(themeContext);

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
          backgroundColor: theme.backgroundSecondary,
          borderColor: theme.backgroundSecondary,
        },
      ]}
    >
      <View
        style={{
          padding: 20,
          width: "50%",
          borderRadius: 100,
        }}
      >
        <Text style={[styles.titleOff, { color: theme.text }]}>50% OFF</Text>
        <Text style={[styles.descOff, { color: theme.textSecondary }]}>
          Descuento en diferentes tiendas.
        </Text>
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
