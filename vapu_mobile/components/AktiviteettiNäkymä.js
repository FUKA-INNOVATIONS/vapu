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
import { useNavigation } from "@react-navigation/native";
import { Paikat } from "../utils/lists";

const windowHeight = Dimensions.get("window").height;

const flatListHeight = windowHeight * 0.17;
const imageHeight = windowHeight * 0.3;

const AktiviteettiNäkymä = ({ route }) => {
  const { id } = route.params;
  const { data, setData } = Paikat();
  const [int, setInt] = useState(1);
  const [dataSlice, setDataSlice] = useState(data.slice(0, 1));

  const nextItem = () => {
    if (int === 1) {
      setDataSlice(data.slice(1, 2));
      setInt(2);
      console.log(data.length);
    } else if (int === 2) {
      setDataSlice(data.slice(2, 3));
      setInt(3);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <Image source={item.image} style={styles.image}></Image>
      <Text style={styles.address}>{item.address}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSlice}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
      {int === data.length ? (
        <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.buttonLeft}>
            <Text style={{ textAlign: "center", marginTop: 50 }}>Nappi</Text>
          </TouchableOpacity>


          <TouchableOpacity style={styles.buttonNav}>
            <Text style={{textAlign: "center", marginTop: 50}}>Nappi</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRight} onPress={nextItem}>
            <Text style={{ textAlign: "center", marginTop: 50 }}>Nappi</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.buttonRight} onPress={nextItem}>
          <Text style={{ textAlign: "center", marginTop: 50 }}>Nappi</Text>
        </TouchableOpacity>
      )}
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
  image: {
    height: imageHeight,
    width: 330,
    borderRadius: 30,
  },
  text: {
    fontSize: 40,
    padding: 5,
    marginRight: 35,
  },
  box1: {
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "center",
  },
  address: {
    fontSize: 22,
    padding: 10,
  },
  description: {
    fontSize: 17,
    width: 300,
    lineHeight: 24,
  },
  buttonRight: {
    height: 150,
    width: 150,
    right: -30,
    bottom: -30,
    alignSelf: "flex-end",
    backgroundColor: "#EDEAEA",
    borderRadius: 80,
  },
  buttonLeft: {
    height: 150,
    width: 150,
    left: -30,
    bottom: -30,
    alignSelf: "flex-start",
    backgroundColor: "#EDEAEA",
    borderRadius: 80,
  },
  buttonNav: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  }
});
export default AktiviteettiNäkymä;

/*

       {int !== 1 && int !== data.lenght && (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.buttonLeft}>
            <Text style={{ textAlign: "center", marginTop: 50 }}>Nappi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonRight} onPress={nextItem}>
            <Text style={{ textAlign: "center", marginTop: 50 }}>Nappi</Text>
          </TouchableOpacity>
        </View>
      )}
*/
