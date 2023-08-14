import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  titleOff: {
    fontSize: 25,
    fontWeight: "900",
  },
  bgBannerOff: {
    borderWidth: 0.5,
    borderColor: colors.gray[600],
    backgroundColor: colors.gray[200],
    borderRadius: 20,
    marginTop: 35,
  },
  descOff: {
    color: colors.black[400],
    fontSize: 12,
  },
  btnOrdenar: {
    borderRadius: 100,
    width: 100,
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  txtOrdenar: {
    fontWeight: "bold",
  },
});
