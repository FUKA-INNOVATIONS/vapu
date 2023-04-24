import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import { AirbnbRating } from "react-native-ratings";
import Icon from "react-native-vector-icons/FontAwesome";

import { Employees } from "./Employees";
import { hexToRgba } from "./utils";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window");

const itemHeight = windowHeight * 0.17;
const imageHeight = windowHeight * 0.14;
const flatHeight = windowHeight * 0.5;
const itemWidth = windowWidth * 0.75;
const searchBarWidth = windowWidth * 0.65;

const itemColor = hexToRgba("#3B88C340", 0.25);

const ListEmployees = (props) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  

  const { data, setData } = Employees();
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <View>
        <Text style={styles.text}>{item.name}</Text>
        <Text style={styles.textInfo}>{item.työtitteli}</Text>
        <AirbnbRating count={5} defaultRating={item.rating} size={20} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 5,
    height: flatHeight,
    width: 350,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: itemHeight,
    backgroundColor: itemColor,
    paddingTop: 10,
    marginHorizontal: 10,
    marginBottom: 0,
    marginTop: 50,
    borderRadius: 20,
  },
  image: {
    height: imageHeight,
    width: imageHeight,
    resizeMode: "cover",
  },
  text: {
    marginLeft: 5,
    fontSize: 19,
    fontWeight: "bold",
  },
  textInfo: {
    marginLeft: 10,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 15,
  },
  searchBar: {
    height: 40,
    width: 300,
    borderWidth: 0.8,
    borderColor: "#000000",
    borderRadius: 14,
    margin: 8,
    padding: 8,
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#fff",
    color: "#424242",
  },
});

export default ListEmployees;
