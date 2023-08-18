import { StyleSheet } from "react-native";

export default StyleSheet.create({
  bgTab: {
    flexDirection: "row",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.4,
    shadowRadius: 16.0,
    elevation: 15,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 0,
    borderTopWidth: 0,
    justifyContent: "space-around",
    padding: 0,
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});
