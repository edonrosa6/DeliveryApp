import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { Ionicons } from "@expo/vector-icons";
import DynamicHeader from "components/DynamicHeader";
import React from "react";
import Checkbox from "expo-checkbox";
import { pizzaIngredients } from "../../data/pizzaIngredients";
import { Entypo } from "@expo/vector-icons";
import { globalStyles } from "../../styles";
import ButtonList from "../../components/ButtonList";

const BuyFood = ({ route, navigation }) => {
  const { name, price, url, ingredientsNumber } = route.params.item;
  const [ingredients, setIngredients] = React.useState(pizzaIngredients);
  const [showIngredients, setShowIngredients] = React.useState(true);
  const [iconName, setIconName] = React.useState("keyboard-arrow-up");
  const [count, setCount] = React.useState(1);

  let scrollOffsetY = React.useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    iconName === "keyboard-arrow-up"
      ? setIconName("keyboard-arrow-down")
      : setIconName("keyboard-arrow-up");

    showIngredients ? setShowIngredients(false) : setShowIngredients(true);
  };

  const handleChange = (id) => {
    let temp = ingredients.map((item) => {
      if (id === item.id) {
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });

    let isCheckedIngredients = temp.filter((x) => x.isChecked);

    if (isCheckedIngredients.length > ingredientsNumber - 1) {
      const copyData = [...temp];

      let data = copyData.map((x) => {
        if (!x.isChecked) {
          return { ...x, disabled: true };
        }

        return { ...x };
      });

      setIngredients(data);

      setTimeout(() => {
        setShowIngredients(false);
      }, 250);

      iconName === "keyboard-arrow-up"
        ? setIconName("keyboard-arrow-down")
        : setIconName("keyboard-arrow-down");

      return;
    } else {
      const copyData = [...temp];

      let data = copyData.map((x) => {
        return { ...x, disabled: false };
      });

      setIngredients(data);
    }
  };

  const getFooter = () => {
    return (
      <View style={{ marginTop: 15 }}>
        {ingredientsNumber ? (
          <>
            {/* Boton List */}
            <ButtonList
              title={"Elige " + ingredientsNumber + " ingredientes"}
              showIngredients={showIngredients}
              iconName={iconName}
              handlePress={handlePress}
            />
            {showIngredients
              ? ingredients.map((item) => (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 10,
                      borderBottomWidth: 0.4,
                      borderColor: colors.gray[400],
                      marginVertical: 5,
                    }}
                  >
                    <Text>{item.name}</Text>
                    <Checkbox
                      style={{ borderRadius: 100, width: 25, height: 25 }}
                      value={item.isChecked}
                      disabled={item.disabled}
                      onValueChange={() => {
                        handleChange(item.id);
                      }}
                    />
                  </View>
                ))
              : null}
          </>
        ) : null}
      </View>
    );
  };

  const getHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Text
          style={{
            color: colors.black[700],
            fontSize: 25,
            fontWeight: "900",
          }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.gray[200],
        justifyContent: "space-between",
      }}
    >
      <View>
        <Pressable
          style={[
            globalStyles.btnGoBack,
            { backgroundColor: colors.gray[300] },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="md-arrow-back" size={25} color={colors.black[400]} />
        </Pressable>
      </View>

      <View>
        <ScrollView style={{ position: "relative" }}>
          <View
            style={{
              backgroundColor: colors.gray[200],
              borderTopStartRadius: 50,
              borderTopEndRadius: 50,
              padding: 25,
            }}
          >
            {getHeader()}
            {getFooter()}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 60,
        }}
      >
        <View
          style={[
            {
              borderColor: colors.gray[300],
              backgroundColor: colors.gray[200],
              borderWidth: 1,
              padding: 15,
              borderRadius: 100,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            },
            globalStyles.shadowProp,
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => {
                count > 0 ? setCount(count - 1) : null;
              }}
            >
              <Entypo name="minus" size={24} color="black" />
            </Pressable>

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                marginHorizontal: 10,
              }}
            >
              {count}
            </Text>

            <Pressable onPress={() => setCount(count + 1)}>
              <Entypo name="plus" size={24} color="black" />
            </Pressable>
          </View>
        </View>

        <Pressable
          disabled={count < 1 ? true : false}
          style={({ pressed }) => [
            {
              transform: [{ scale: pressed ? 0.95 : 1 }],
              backgroundColor:
                count < 1 ? colors.gray[800] : colors.yellow[300],
              borderRadius: 100,
              height: 60,
              alignItems: "center",
              justifyContent: "center",
            },
            globalStyles.shadowProp,
          ]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "900",
                color: count < 1 ? colors.black[300] : colors.black[400],
                fontSize: 17,
              }}
            >
              Agregar ${count * price}.00
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default BuyFood;
