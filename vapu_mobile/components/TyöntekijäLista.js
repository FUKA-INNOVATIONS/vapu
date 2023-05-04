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
import { Puuhakaverit } from "../utils/lists";
import {Button} from '@rneui/base';
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;

const flatListHeight = windowHeight * 0.17;
const imageHeight = windowHeight * 0.1;

const EmployeeList = (props) => {
  const { data, setData } = Puuhakaverit();
  const navigation = useNavigation();
  const chooseTime = () => {
    navigation.navigate('moro');
    console.log("toimiiko");
  }

  const renderItem = ({ item}) => {
    console.log(item.id);
    return (
        <View>
        <TouchableOpacity style={styles.item}>
          <View style={styles.container}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
    <Button  style={styles.button} >lisätiedot</Button>
          <Button  style={styles.button} onPress={chooseTime}  > valitse</Button>


        </View>
    );
  };

  return (
      <View style={styles.container}>
        <Text style={styles.text}> Valitse puuhakaveri</Text>
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
        />
      </View>
  );
};

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
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 15
  },
  button: {
    borderRadius: 40,
    padding: 15
  }
});

export default EmployeeList;
