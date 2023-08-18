import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.black[700],
  },
  paragraph: {
    fontSize: 12,
    color: colors.black[400],
  },
  titleBanner: {
    marginTop: 5,
    flexWrap: "wrap",
    flexDirection: "row",
    fontSize: 16,
  },
  bgImage: {
    width: 150,
    flexDirection: "row",
    marginRight: 10,
    marginTop: 10,
    borderRadius: 20,
    position: "relative",
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 13,
  },
});
