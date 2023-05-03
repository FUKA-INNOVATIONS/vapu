import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { useMyData } from "../utils/lists";
import { hexToRgba } from "./utils";
import { FontFamily } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PropTypes from "prop-types";

// Hind Siliguri
const windowHeight = Dimensions.get("window").height;
const backgroundColor = hexToRgba("#3B88C3", 0.81);

const topViewHeight = windowHeight * 0.17;
const buttonHeight = windowHeight * 0.07; // 2% of the screen height
const activityHeight = windowHeight * 0.23; // 2% of the screen height

//const buttonWidth = windowWidth * 0.07; // 2% of the screen height

const Home = (props) => {
  const navigation = useNavigation();

  const handlePress = (id) => {
    console.log(id);
    switch (id) {
      case '1': 
        navigation.navigate('ListEmployees');
        break;
        case '2': 
        navigation.navigate('Aktiviteetit');
        break;
      case "3":
        navigation.navigate("tulevatAktiviteetit");
        break;
      case "4":
        navigation.navigate("Asiakaspalvelu");
        break;
      case "5":
        navigation.navigate("Mieliala");
        break;
    }
  };

  const { data, setData } = useMyData();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handlePress(item.id)}>
      <Text style={styles.font}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: "column",
      }}
    >
      <View style={styles.topView}>
        <Text style={styles.logoText}>vapu</Text>
        <Image source={require("../assets/vapu.png")} style={styles.image} />
      </View>

      <Text style={styles.userGreeting}>Hei Toni!</Text>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity style={styles.nextActivity} onPress={handlePress}>
          <Text style={styles.today}>Tänään on bingopäivä!</Text>
          <Image source={require("../assets/aktiviteetit/bingoa.png")} style={styles.bingo} />
          <Text style={styles.description}> Antti hakee sinut 13:00 </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={1}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    color: "white",
    alignItems: "flex-start",
    marginLeft: 35,
    fontSize: 33,
    fontWeight: "bold",
  },
  userGreeting: {
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 35,
  },
  topView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: backgroundColor,
    height: topViewHeight,
  },
  image: {
    width: 125,
    height: "80%",
    marginRight: 25,
    marginTop: 25,
  },
  item: {
    backgroundColor: backgroundColor,
    marginTop: 5,
    height: buttonHeight,
    borderRadius: 15,
    width: 300,
  },
  font: {
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
    fontWeight: "normal",
    color: "white",
    padding: 12,
  },
  nextActivity: {
    alignItems: "center",
    height: activityHeight,
    width: 300,
    backgroundColor: "#EDEAEA",
    borderRadius: 15,
  },
  today: {
    fontWeight: "bold",
    marginTop: 25,
    fontSize: 20,
  },
  bingo: {
    height: "50%",
    aspectRatio: 1,
    marginVertical: 10,
  },
});

export default Home;
