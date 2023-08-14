import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  title: {
    fontWeight: "900",
    fontSize: 25,
    color: colors.black[700],
  },
  principalText: {
    color: colors.black[400],
    marginTop: 5,
  },
  bgCard: {
    backgroundColor: colors.yellow[300],
    borderRadius: 13,
    paddingVertical: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
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
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  subtitle: {
    fontWeight: "900",
    fontSize: 20,
  },
});
