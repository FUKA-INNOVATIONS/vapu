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
import { Kal } from "../utils/lists";

const windowHeight = Dimensions.get("window").height;

const listHeight = windowHeight * 0.65;

const Kalenteri = (props) => {
  const date = new Date();
  const day = date.getDate().toString();
  const { data, setData } = Kal();
  const [selectedId, setselectedId] = useState(day);

  const handlePress = (id) => {
    console.log(id);

    if (id !== selectedId) {
      setselectedId(id);
    } else {
      setselectedId(0);
    }
  };

  const renderItem = ({ item }) => {
    const boxStyle =
      selectedId && item.id === selectedId ? styles.selectedTime : styles.times;
    const textStyle =
      selectedId && item.id === selectedId
        ? styles.selectedTimeText
        : styles.timesText;
    return (
      <TouchableOpacity style={boxStyle} onPress={() => handlePress(item.id)}>
        <Text style={textStyle}>{item.id}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={styles.text}>Päivämäärä</Text>
      <View style={styles.kuukausi1}>
        <Text style={styles.kuukausi}>Toukokuu</Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  times: {
    width: 100,
    height: 70,
    backgroundColor: "#EDEAEA",
    margin: 5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTime: {
    width: 100,
    height: 70,
    backgroundColor: "#3B88C3",
    margin: 5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  timesText: {
    fontSize: 35,
    fontWeight: "bold",
  },
  selectedTimeText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  list: {
    height: listHeight,
    flexGrow: 0,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    textAlign: "right",
    marginBottom: 20,
  },
  kuukausi: {
    fontSize: 35,
    width: 330,
    height: 50,
    textAlign: "center",
  },
  kuukausi1: {
    backgroundColor: "#EDEAEA",
    width: 330,
    height: 50,
    marginBottom: 10,
    borderRadius: 15,
  },
});

export default Kalenteri;
