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
  Button
} from "react-native";

import { Tulevat} from "../utils/lists";
import { hexToRgba } from "./utils";


const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window");

const itemHeight = windowHeight * 0.17;
const imageHeight = windowHeight * 0.14;
const flatHeight = windowHeight * 0.5;
const itemWidth = windowWidth * 0.75;
const searchBarWidth = windowWidth * 0.65;

const itemColor = hexToRgba("#3B88C340", 0.25);

const TulevatAktiviteetit = (props) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const results = data.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(results);
  }, [searchText]);

  const { data, setData } = Tulevat();
  const renderItem = ({ item }) => (

      <View style={styles.item}>
        <View style={styles.view}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.textInfo}>{item.description}</Text>
          <Text style={styles.textInfo}>{item.placeandtime}</Text>
          <View style={styles.buttonStyle}>
            <Button title={"lisätiedot"} style={styles.Button}></Button>
            <Button title={"peruuta"} style={styles.Button}></Button>
          </View>

        </View>

      </View>
  );

  return (

      <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
      >
        <Text style={styles.title}>Tulevat Aktiviteetit </Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={1}
            contentContainerStyle={styles.ist}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 50
  },
  list: {
    marginTop: 5,
    height: flatHeight,
    width: 35
  },
  item: {
    flexDirection: "row",
    height: 200,
    width: 350,
    paddingTop: 10,
    marginHorizontal: 10,
    marginBottom: 0,
    marginTop: 50,
    borderRadius: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "semibold",
  },
  textInfo: {
    fontSize: 15,
    marginTop: 15,
  },
  Button: {
    borderRadius: 20,
    padding: 20,
  },
  buttonStyle: {
    flexdirection: "row",
    paddingTop: 10
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    paddingTop: 15
  }


});

export default TulevatAktiviteetit;