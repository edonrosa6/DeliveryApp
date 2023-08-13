import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  Pressable,
  TextInput,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";
import styles from "./styles";
import { colors } from "../../../themes/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import WavyHeader from "../../components/WavyHeader";
import LinearGradientBg from "../../components/LinearGradientBg";
import Pizza from "../../../assets/pizza.webp";
import Burguer from "../../../assets/burguer.webp";
import Verduras from "../../../assets/verduras.webp";
import Huevo from "../../../assets/egg.png";

const Home = () => {
  const [text, onChangeText] = React.useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  const windowHeight = Dimensions.get("window").height;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const comidas = [
    {
      id: 1,
      name: "Pizza",
      description: "Pizza de 3 ingredientes",
      iconName: "pizza-slice",
      url: Pizza,
      colors: colors.red[500],
    },
    {
      id: 2,
      name: "Hamburguesa",
      description: "Carne 100% de res",
      iconName: "hamburger",
      url: Burguer,
      colors: colors.red[500],
    },
    {
      id: 3,
      name: "Comida Saludable",
      description: "Frutas y verduras",
      iconName: "apple-alt",
      url: Verduras,
      colors: colors.red[500],
    },
  ];

  const recomendaciones = [
    {
      id: 1,
      name: "Desayunos Caty",
      description: "",
      url: Huevo,
      colors: colors.red[300],
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <WavyHeader customStyles={styles.svgCurve} />

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          width: "100%",
          paddingHorizontal: 12,
        }}
      >
        <View style={{ marginTop: 15, position: "relative" }}>
          <TextInput
            placeholder="Buscar"
            style={[styles.input, styles.shadowProp]}
            onChangeText={onChangeText}
            value={text}
          />

          <View style={styles.searchIcon}>
            <FontAwesome5 name="search" color="#aaa" size={25} />
          </View>
        </View>

        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{ height: windowHeight }}
        >
          <View style={{ marginTop: 35 }}>
            <Text
              style={{
                fontWeight: "900",
                fontSize: 25,
                color: colors.black[700],
              }}
            >
              ¡Hola, Edson!
            </Text>
            <Text style={{ color: colors.black[400], fontWeight: "600" }}>
              Las mejores comidas hasta tu hogar con solo un clic.
            </Text>
          </View>

          <View
            style={[
              styles.bgBannerOff,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
                height: 150,
              },
            ]}
          >
            <View
              style={{
                padding: 20,
                width: "50%",
                borderRadius: 100,
                backgroundColor: colors.gray[200],
              }}
            >
              <Text style={styles.titleOff}>50% OFF</Text>
              <Text style={styles.descOff}>
                Descuento en diferentes tiendas.
              </Text>
              <Pressable
                style={({ pressed }) => [
                  {
                    transform: [{ scale: pressed ? 0.92 : 1 }],
                  },
                ]}
              >
                <LinearGradient
                  colors={[colors.yellow[200], colors.yellow[300]]}
                  style={styles.btnOrdenar}
                >
                  <Text style={styles.txtOrdenar}>Ordenar</Text>
                </LinearGradient>
              </Pressable>
            </View>

            <View style={{ width: "50%" }}>
              <Image
                source={Pizza}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              />
            </View>
          </View>

          <FlatList
            style={{ width: "100%", marginTop: 25 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={comidas}
            renderItem={({ item }) => (
              <View key={item.id}>
                <LinearGradientBg item={item}></LinearGradientBg>
              </View>
            )}
          ></FlatList>

          {/* Recomendaciones */}
          <View style={{ marginVertical: 35 }}>
            <Text style={styles.subtitle}>Recomendaciones</Text>
            <FlatList
              style={{ width: "100%", marginTop: 5 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={recomendaciones}
              renderItem={({ item }) => (
                <View key={item.id}>
                  <View
                    style={[
                      {
                        width: "100%",
                        alignItems: "center",
                      },
                    ]}
                  >
                    <Image
                      source={item.url}
                      style={{ width: 90, height: 100, borderRadius: 13 }}
                    />

                    <View style={{ marginLeft: 10 }}>
                      <Text
                        style={{
                          color: colors.black[700],
                          fontWeight: "600",
                          fontSize: 17,
                        }}
                      >
                        {item.name}
                      </Text>

                      <View
                        style={{
                          flexDirection: "row",
                          gap: 4,
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{ color: colors.black[400], fontSize: 12 }}
                        >
                          30 min
                        </Text>
                        <View
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: 100,
                            backgroundColor: colors.gray[400],
                          }}
                        ></View>
                        <Text
                          style={{ color: colors.yellow[700], fontSize: 12 }}
                        >
                          $30
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            ></FlatList>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
