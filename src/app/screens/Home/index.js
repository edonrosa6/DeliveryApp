import React, { useContext } from "react";
import {
  Text,
  View,
  FlatList,
  ScrollView,
  Dimensions,
  RefreshControl,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import styles from "./styles";

import WavyHeader from "components/WavyHeader";

import { recomendaciones } from "data/recomendaciones";
import { comidas } from "data/comidas";
import { Entypo } from "@expo/vector-icons";
import Search from "../../components/Search";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import { colors } from "../../../themes/colors";
import Logo from "../../components/Logo";
import { useTheme } from "../../config/theme";
import themeContext from "../../config/themeContext";
import { globalStyles } from "../../styles";

const Home = () => {
  const [text, onChangeText] = React.useState("");
  const [refreshing, setRefreshing] = React.useState(false);
  const windowHeight = Dimensions.get("window").height;
  const theme = useContext(themeContext);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
      />

      <WavyHeader customStyles={styles.svgCurve} />

      <View style={{ marginBottom: 160 }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Pressable
              style={[
                globalStyles.shadowProp,
                {
                  backgroundColor: theme.background,
                  borderRadius: 100,
                  padding: 5,
                },
              ]}
            >
              <Entypo name="menu" size={24} color={theme.text} />
            </Pressable>
          </View>

          <Logo />
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
            paddingHorizontal: 20,
            height: "100%",
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
            <View style={{ marginTop: 25 }}>
              <Text style={[styles.title, { color: theme.text }]}>
                ¡Hola, Edson!
              </Text>
              <Text
                style={[styles.principalText, { color: theme.textSecondary }]}
              >
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
                  <Card theme={theme} item={item}></Card>
                </View>
              )}
            ></FlatList>

            {/* Recomendaciones */}
            <View style={{ marginTop: 25, marginBottom: 45 }}>
              <Text style={[styles.subtitle, { color: theme.text }]}>
                Recomendaciones
              </Text>
              <FlatList
                style={{ width: "100%", marginVertical: 15 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={recomendaciones}
                renderItem={({ item }) => (
                  <View key={item.id}>
                    <Card theme={theme} item={item} />
                  </View>
                )}
              ></FlatList>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
