import React from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";
import styles from "./styles";

import WavyHeader from "components/WavyHeader";

import { recomendaciones } from "data/recomendaciones";
import { comidas } from "data/comidas";

import Search from "../../components/Search";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

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

  return (
    <View style={{ flex: 1 }}>
      <WavyHeader customStyles={styles.svgCurve} />

      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <Search value={text} onChangeText={onChangeText} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          style={{ height: windowHeight }}
        >
          <View style={{ marginTop: 35 }}>
            <Text style={styles.title}>¡Hola, Edson!</Text>
            <Text style={styles.principalText}>
              Las mejores comidas hasta tu hogar con un solo clic.
            </Text>
          </View>

          <Banner />

          <FlatList
            style={{ width: "100%", marginTop: 25 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={comidas}
            renderItem={({ item }) => (
              <View key={item.id}>
                <Card item={item}></Card>
              </View>
            )}
          ></FlatList>

          {/* Recomendaciones */}
          <View style={{ marginTop: 25, marginBottom: 45 }}>
            <Text style={styles.subtitle}>Recomendaciones</Text>
            <FlatList
              style={{ width: "100%", marginVertical: 15 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={recomendaciones}
              renderItem={({ item }) => (
                <View key={item.id}>
                  <Card item={item} />
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
