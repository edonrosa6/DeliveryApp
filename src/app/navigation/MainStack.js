import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import DetailsFood from "../screens/DetailsFood";
import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
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
          headerBackTitleVisible: false,
          headerTintColor: colors.black[400],
          headerStyle: styles.header,
          headerShadowVisible: false,
        }}
        component={DetailsFood}
      />
    </Stack.Navigator>
  );
};

export { HomeNavigator };

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow[300],
  },
});
