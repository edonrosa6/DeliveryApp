import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colors } from "../../themes/colors";

import Home from "screens/Home";
import DetailsFood from "screens/DetailsFood";
import Profile from "screens/Profile";
import BuyFood from "screens/BuyFood";
import Cards from "../screens/Cards";
import CardDetails from "../screens/CardDetails";
import AddCard from "../screens/AddCard";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "Delivery App",
          headerStyle: styles.header,
          headerShadowVisible: false,
          headerShown: false,
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
          headerShown: false,
          headerBackTitleVisible: false,
          headerTintColor: colors.black[400],
          headerShadowVisible: false,
        }}
        component={Profile}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CardsNavigator"
        component={CardsNavigator}
      />
    </Stack.Navigator>
  );
};

export { ProfileNavigator };

const CardsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cards"
        options={{
          title: "Tarjetas",
          headerShown: false,
          headerTintColor: colors.black[400],
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.yellow[200],
          },
          headerBackVisible: true,
        }}
        component={Cards}
      />

      <Stack.Screen
        name="CardDetails"
        options={{
          title: "Detalle",
          headerShown: false,
          headerTintColor: colors.black[400],
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.yellow[200],
          },
          headerBackVisible: true,
        }}
        component={CardDetails}
      />

      <Stack.Screen
        name="AddCard"
        options={{
          title: "Detalle",
          headerShown: false,
          headerTintColor: colors.black[400],
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.yellow[200],
          },
          headerBackVisible: true,
        }}
        component={AddCard}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow[300],
  },
});
