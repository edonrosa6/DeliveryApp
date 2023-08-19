import { Image, Pressable, SafeAreaView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles";
import { colors } from "../../../themes/colors";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import ProfileList from "../../components/ProfileList";
import themeContext from "../../config/themeContext";
import { useContext } from "react";
import GoBackButton from "../../components/GoBackButton";

const CardDetails = ({ route, navigation }) => {
  const theme = useContext(themeContext);
  const { name, cardNumber, icon, url, holder, dueDate } = route.params.item;

  const lastDigits = (cardNumber) => {
    return cardNumber.slice(-4);
  };

  const dots = () => {
    return (
      <View
        style={{
          marginHorizontal: 0,
          borderRadius: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color:
              name.toLowerCase() === "mastercard"
                ? colors.gray[200]
                : colors.black[700],
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          *
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <GoBackButton navigation={navigation} />

        <Text style={{ color: theme.text }}>{name}</Text>
      </View>

      <View style={{ padding: 20 }}>
        <LinearGradient
          colors={
            name.toLowerCase() === "mastercard"
              ? [colors.black[400], colors.black[700]]
              : [colors.gray[300], colors.gray[600]]
          }
          style={[
            styles.card,
            { flexDirection: "column", justifyContent: "space-between" },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  color:
                    name.toLowerCase() === "mastercard"
                      ? colors.gray[200]
                      : colors.black[700],
                  fontWeight: "900",
                  fontSize: 19,
                }}
              >
                {holder}
              </Text>

              <Text
                style={{
                  fontWeight: "600",
                  color:
                    name.toLowerCase() === "mastercard"
                      ? colors.gray[600]
                      : colors.black[400],
                }}
              >
                ERAP Bank
              </Text>
            </View>

            <Image source={url} style={{ width: 50, height: 30 }} />
          </View>

          <View style={styles.footerCard}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {dots()}
              {dots()}
              {dots()}
              {dots()}
              <View style={{ marginHorizontal: 3 }}></View>
              {dots()}
              {dots()}
              {dots()}
              {dots()}
              <View style={{ marginHorizontal: 3 }}></View>
              {dots()}
              {dots()}
              {dots()}
              {dots()}
              <View style={{ marginHorizontal: 3 }}></View>
              <Text
                style={{
                  color:
                    name.toLowerCase() === "mastercard"
                      ? colors.gray[200]
                      : colors.black[700],
                  fontSize: 22,
                  marginTop: -3,
                }}
              >
                {lastDigits(cardNumber)}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color:
                    name.toLowerCase() === "mastercard"
                      ? colors.gray[600]
                      : colors.black[400],
                  fontSize: 15,
                }}
              >
                {dueDate}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default CardDetails;
