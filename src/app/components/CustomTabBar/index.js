import { Pressable, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { BlurView } from "expo-blur";
import themeContext from "../../config/themeContext";
import { useContext } from "react";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const theme = useContext(themeContext);

  return (
    <BlurView style={styles.bgTab} intensity={50} tint={theme.theme}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        // const label =
        //   options.tabBarLabel !== undefined
        //     ? options.tabBarLabel
        //     : options.title !== undefined
        //     ? options.title
        //     : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        let iconName;

        if (route.name === "Home") {
          iconName = isFocused ? "ios-home" : "ios-home-outline";
        } else if (route.name === "Profile") {
          iconName = isFocused ? "ios-person" : "ios-person-outline";
        }

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}
          >
            <Ionicons name={iconName} size={25} color={theme.text} />
          </Pressable>
        );
      })}
    </BlurView>
  );
};

export default CustomTabBar;
