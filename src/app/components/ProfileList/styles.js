import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  principal: {
    borderBottomWidth: 1,
    borderColor: colors.gray[300],
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
