import { Image, SafeAreaView, StatusBar, Text, View } from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ProfileList from "../../components/ProfileList";
import { useNavigation } from "@react-navigation/native";
import themeContext from "../../config/themeContext";
import { useContext } from "react";

const Profile = () => {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const moveToProfileData = () => {
    navigation.navigate("PersonalData");
  };

  const moveToAddresses = () => {
    navigation.navigate("Addresses");
  };

  const signOut = () => {
    console.log("Sign out");
  };

  const moveToCards = () => {
    navigation.navigate("CardsNavigator");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.yellow[200] }}>
      <View>
        <View style={{ padding: 20, paddingTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                  source={{
                    uri: "https://media.licdn.com/dms/image/D4D35AQHaNXje1M-JhA/profile-framedphoto-shrink_200_200/0/1677090552441?e=1692838800&v=beta&t=1ZAFaGWVYoBLwhM1qgekKX-ngXVlsBF6zt_RRbGK9to",
                  }}
                />
              </View>

              <View>
                <Text style={styles.name}>Edson Rosales</Text>
                <Text style={{ fontSize: 12, color: colors.black[400] }}>
                  Frontend Dev
                </Text>
              </View>
            </View>

            <View>
              <Ionicons name="notifications-outline" size={28} color="black" />
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: theme.background,
            height: "100%",
            borderRadius: 25,
          }}
        >
          <View style={{ padding: 20 }}>
            <View
              style={{
                borderRadius: 10,
              }}
            >
              <View>
                <Text
                  style={{ fontWeight: "900", fontSize: 20, color: theme.text }}
                >
                  Información
                </Text>

                <ProfileList
                  title="Datos Personales"
                  iconName="person-outline"
                  onPress={moveToProfileData}
                />
                <ProfileList
                  title="Direcciones"
                  iconName="book-outline"
                  onPress={moveToAddresses}
                />
                <ProfileList
                  title="Tarjetas"
                  iconName="card-outline"
                  onPress={moveToCards}
                />
              </View>

              <View style={{ marginVertical: 20 }}>
                <Text
                  style={{ fontWeight: "900", fontSize: 20, color: theme.text }}
                >
                  Configuración
                </Text>

                <ProfileList
                  onPress={signOut}
                  title="Cerrar Sesión"
                  iconName="md-log-out-outline"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
