import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  bgCard: {
    backgroundColor: colors.yellow[300],
    borderRadius: 13,
    paddingVertical: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleBanner: {
    fontWeight: "bold",
    fontSize: 15,
  },
  descBanner: {
    color: colors.black[400],
    fontSize: 12,
  },
  banner: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 50,
    fontSize: 15,
    borderRadius: 8,
  },
  searchIcon: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  subtitle: {
    fontWeight: "900",
    fontSize: 20,
  },
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
