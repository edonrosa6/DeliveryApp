import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.black[400],
    height: 200,
    borderRadius: 30,
    padding: 20,
  },
  footerCard: {
    flexDirection: "column",
  },
});
