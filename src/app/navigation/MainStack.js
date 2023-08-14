import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../../themes/colors";

import Home from "screens/Home";
import DetailsFood from "screens/DetailsFood";
import Profile from "screens/Profile";
import BuyFood from "screens/BuyFood";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.yellow[300],
          },
          title: "Delivery App",
          headerStyle: styles.header,
          headerShadowVisible: false,
        }}
        name="DeliveryApp"
        component={Home}
      />
      <Stack.Screen
        name="DetailsFood"
        options={{
          title: "Comida",
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colors.black[400],
          headerShadowVisible: false,
        }}
        component={DetailsFood}
      />
      <Stack.Screen
        name="BuyFood"
        options={{
          title: "Comprar",
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colors.black[400],
          headerShadowVisible: false,
        }}
        component={BuyFood}
      />
    </Stack.Navigator>
  );
};

export { HomeNavigator };

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfileNavigator"
        options={{
          title: "Perfil",
          headerBackTitleVisible: false,
          headerTintColor: colors.black[400],
          headerStyle: styles.header,
          headerShadowVisible: false,
        }}
        component={Profile}
      />
    </Stack.Navigator>
  );
};

export { ProfileNavigator };

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow[300],
  },
});
