import { Appearance, useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { HomeNavigator, ProfileNavigator } from "navigation/MainStack";

import React, { useState } from "react";
import CustomTabBar from "./src/app/components/CustomTabBar";

import themeContext from "./src/app/config/themeContext";
import theme from "./src/app/config/theme";

const Tab = createBottomTabNavigator();

const App = () => {
  const [mode, setMode] = useState(Appearance.getColorScheme());

  Appearance.addChangeListener((scheme) => {
    setMode(scheme.colorScheme);
  });

  return (
    <themeContext.Provider value={mode === "dark" ? theme.dark : theme.light}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeNavigator} />
          <Tab.Screen
            name="Profile"
            options={{ title: "Perfil" }}
            component={ProfileNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;
