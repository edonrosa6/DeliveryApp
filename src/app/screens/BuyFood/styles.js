import { StyleSheet } from "react-native";
import { colors } from "../../../themes/colors";

export default StyleSheet.create({
  bgHead: {
    width: "100%",
    position: "relative",
    height: 200,
    backgroundColor: colors.yellow[300],
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  title: {
    fontWeight: "900",
    fontSize: 35,
  },
  btnGoBack: {
    position: "absolute",
    top: 45,
    left: 20,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: colors.gray[200],
  },
  subtitle: {
    color: colors.black[400],
    fontWeight: "900",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  btnShoppingCar: {
    position: "absolute",
    top: 45,
    right: 20,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: colors.gray[200],
  },
});
