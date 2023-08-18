import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../config/theme";

export default StyleSheet.create({
  title: {
    fontWeight: "900",
    fontSize: 25,
  },
  principalText: {
    marginTop: 5,
  },
  bgCard: {
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
