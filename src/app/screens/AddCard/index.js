import { Pressable, SafeAreaView, Text, View, TextInput } from "react-native";
import GoBackButton from "../../components/GoBackButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../themes/colors";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import themeContext from "../../config/themeContext";
import { useContext } from "react";

const AddCard = () => {
  const theme = useContext(themeContext);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <GoBackButton navigation={navigation} />
      <View style={{ padding: 20 }}>
        <Text style={{ fontWeight: "900", fontSize: 22, color: theme.text }}>
          Agregar Tarjeta
        </Text>

        <View style={{ marginTop: 20 }}>
          <View>
            <Text style={{ color: theme.text }}>Titular</Text>

            <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  gap: 12,
                  backgroundColor: theme.backgroundSecondary,
                },
              ]}
            >
              <Ionicons name="person" size={20} color={colors.gray[500]} />
              <TextInput
                placeholder="Nombre completo"
                style={{
                  width: "100%",
                  fontSize: 16,
                }}
              ></TextInput>
            </View>
          </View>

          <View>
            <Text style={{ color: theme.text }}>Número de tarjeta</Text>

            <View
              style={[
                styles.input,
                {
                  flexDirection: "row",
                  gap: 12,
                  backgroundColor: theme.backgroundSecondary,
                },
              ]}
            >
              <Ionicons name="card" size={20} color={colors.gray[500]} />
              <TextInput
                style={{
                  width: "100%",
                  fontSize: 16,
                }}
                placeholder="Tarjeta de crédito o débito"
              ></TextInput>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 15,
              width: "100%",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.text }}>Fecha de vencimiento</Text>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.backgroundSecondary },
                ]}
                placeholder="MM/AA"
              ></TextInput>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ color: theme.text }}>Código de seguridad</Text>
              <TextInput
                style={[
                  styles.input,
                  { backgroundColor: theme.backgroundSecondary },
                ]}
                placeholder="CVV"
              ></TextInput>
            </View>
          </View>
        </View>

        <Pressable
          onPress={() => navigation.navigate("Cards")}
          style={({ pressed }) => [
            { transform: [{ scale: pressed ? 0.95 : 1 }] },
          ]}
        >
          <LinearGradient
            colors={[colors.yellow[200], colors.yellow[400]]}
            style={{
              padding: 20,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "800" }}>Agregar</Text>
          </LinearGradient>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddCard;
