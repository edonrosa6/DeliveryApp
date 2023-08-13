import { StyleSheet, Text, View } from "react-native";
import Home from "./src/app/screens/Home";
import { colors } from "./src/themes/colors";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./src/app/screens/Profile";
import { HomeNavigator } from "./src/app/navigation/MainStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.4,
            shadowRadius: 16.0,
            elevation: 15,
            position: "absolute",
            bottom: 0,
            padding: 10,
            width: "100%",
            height: 84,
            zIndex: 0,
            borderTopWidth: 0,
            backgroundColor: colors.yellow[300],
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Perfil") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: colors.black[700],
          tabBarInactiveTintColor: colors.black[400],
        })}
      >
        <Tab.Screen name="Home" component={HomeNavigator} />
        <Tab.Screen
          options={{
            headerStyle: styles.header,
            headerShadowVisible: false,
          }}
          name="Perfil"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.yellow[300],
  },
});
