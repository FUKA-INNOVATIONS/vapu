import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { Aktiviteetit } from "../utils/lists";

const windowHeight = Dimensions.get("window").height;

const flatListHeight = windowHeight * 0.17;
const imageHeight = windowHeight * 0.1;

/*const ValitseAktiviteetti = (props) => {
  const { data, setData } = Aktiviteetit();
*/
  const ValitseAktiviteetti = ({ item}) => {
    const itemStyle = styles.item;
    console.log(item.id);
    return (
      <TouchableOpacity style={itemStyle}>
        <View style={styles.container}>
          <Image source={item.image} style={styles.image}/>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
/*
  return (
    <View style={styles.container}>
      <FlatList
        data={data.slice(0, 7)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
  
};*/

/*
const renderItem = ({ item }) => {
    const { data, setData } = Tunnetilat();

    return (
      <TouchableOpacity style={styles.item}>
        <View style={styles.container}>
          <Image source={item.image} style={styles.image} />
          <Text>{item.mood}</Text>
        </View>
      </TouchableOpacity>
    );
  };
*/


/* return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
  */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  item: {
    margin: 15,
    backgroundColor: "#EDEAEA",
    marginTop: 5,
    height: flatListHeight,
    aspectRatio: 1,
    borderRadius: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lastItem: {
    margin: 15,
    backgroundColor: "#EDEAEA",
    marginTop: 5,
    height: flatListHeight,
    aspectRatio: 2.2/1,
    borderRadius: 15,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: imageHeight,
    aspectRatio: 1,
  },
  text: {
    fontSize: 17,
    marginBottom: -10,
  }
});

export default ValitseAktiviteetti;
