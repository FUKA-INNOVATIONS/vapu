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

import { Tulevat} from "../utils/lists";
import { hexToRgba } from "./utils";
import {Button} from '@rneui/base';

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
      <TouchableOpacity style={styles.item}>
        <View style={styles.view}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.textInfo}>{item.description}</Text>

          <Text style={styles.kielitaito}>{item.placeandtime}</Text>
          <View style={{flexdirection: "row"}}>
            <Button title={"lisätiedot"} style={styles.Button}></Button>
            <Button title={"peruuta"} style={styles.Button}></Button>
          </View>

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
    width: 350,
  },
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    height: 175,
    width: 350,
    paddingTop: 10,
    marginHorizontal: 10,
    marginBottom: 0,
    marginTop: 50,
    borderRadius: 20,
  },
  text: {
    marginLeft: 5,
    fontSize: 30,
    fontWeight: "bold",
  },
  textInfo: {
    fontSize: 15,
    marginTop: 15,
  },
  Button: {
    borderRadius: 20,
    padding: 20,
    flexDirection: "row"
  }


});

export default TulevatAktiviteetit;