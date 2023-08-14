import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 15,
    borderRadius: 8,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
});
