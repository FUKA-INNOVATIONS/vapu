import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Milloin } from "../utils/lists";
import { Ajat } from "../utils/lists";
import { useNavigation } from "@react-navigation/native";

const windowHeight = Dimensions.get("window").height;
const buttonHeight = windowHeight * 0.07;
const listHeight = windowHeight * 0.23;

const ValitseAika = () => {
 const { data, setData } = Milloin();
  const { time, setTime } = Ajat();

 const navigation = useNavigation();
  const [selectedId, setselectedId] = useState("1");
  const [selectedTimeId, setselectedTimeId] = useState("1");

  const handlePress = (id) => {
    console.log(id);
    switch (id) {
      case "1":
        if (id !== selectedId) {
          setselectedId(id);
        } else {
          console.log(time);
          setselectedId(0);
        }
        break;
      case "2":
        if (id !== selectedId) {
          setselectedId(id);
        } else {
          console.log(selectedId + "+" + id);
          setselectedId(0);
        }
        break;
      case "3":
        navigation.navigate("Home");
        break;
    }
  };

  const handlePress2 = (id, aika) => {
    console.log(id + " " + aika);

    if (id !== selectedTimeId) {
      setselectedTimeId(id);
    } else {
      console.log(time);
      setselectedTimeId(0);
    }
  };

  const renderItem = ({ item }) => {
    //    const itemStyle = selectedId && item.id === selectedId ? styles.selectedItem : styles.item;
    const itemStyle =
        selectedId && item.id === selectedId ? styles.selectedItem : styles.item;
    const textStyle =
        selectedId && item.id === selectedId ? styles.selectedText : styles.text;

    return (
        <TouchableOpacity style={itemStyle} onPress={() => handlePress(item.aika)}>
          <Text style={textStyle}>{item.name}</Text>
        </TouchableOpacity>
    );
  };

  const renderTime = ({ item }) => {
    const timeStyle =
        selectedTimeId && item.id === selectedTimeId ? styles.selectedTime : styles.times;
    const timeTextStyle =
        selectedTimeId && item.id === selectedTimeId
            ? styles.selectedTimeText
            : styles.timesText;
    return (
        <TouchableOpacity style={timeStyle} onPress={() => handlePress2(item.id, item.aika)}>
          <Text style={timeTextStyle}>{item.aika}</Text>
        </TouchableOpacity>
    );
  };

  return (
      <View style={styles.container}>
        <Text style={styles.topText}>Milloin?</Text>
        <FlatList data={data} renderItem={renderItem} style={styles.list} />
        <FlatList
            data={time}
            renderItem={renderTime}
            numColumns={"3"}
            style={styles.list2}
        />
        <Text style={styles.date}>18.4.2023 klo 9.00</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 35, color: "#FFFFFF" }}>Valitse</Text>
        </TouchableOpacity>

      </View>
  );
}

export default ValitseAika;
/*const [backgroundColor, setbackgroundColor] = useState("#EDEAEA");
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 10,
    height: windowHeight,
  },
  item: {
    backgroundColor: "#EDEAEA",
    marginTop: 5,
    height: buttonHeight,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedItem: {
    backgroundColor: "#3B88C3",
    marginTop: 5,
    height: buttonHeight,
    borderRadius: 15,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    height: listHeight,
    flexGrow: 0,
    marginBottom: 20,
  },
  list2: {
    flexGrow: 0,
    marginBottom: 10,
  },
  text: {
    fontSize: 25,
  },
  selectedText: {
    fontSize: 25,
    color: "#FFFFFF",
  },
  topText: {
    fontSize: 40,
    fontWeight: "bold",
    width: 300,
    textAlign: "right",
    padding: 10,
  },
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
    fontSize: 25,
    fontWeight: "bold",
  },
  selectedTimeText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  date: {
    fontSize: 25,
    fontWeight: "bold",
    height: 30,
  },
  button: {
    width: 300,
    height: 70,
    backgroundColor: "#3B88C3",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 15,
  },
});

