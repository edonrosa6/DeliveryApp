import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.black[500],
  },
  paragraph: {
    fontSize: 12,
    color: colors.black[400],
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleBanner: {
    padding: 10,
    fontWeight: "600",
    color: colors.black[700],
  },
});
