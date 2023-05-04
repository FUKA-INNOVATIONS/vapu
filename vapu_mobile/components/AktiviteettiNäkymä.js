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
const { width: screenWidth } = Dimensions.get("window");


const imageHeight = windowHeight * 0.3;

const AktiviteettiNäkymä = ({ route }) => {
  const { id } = route.params;
  const { data, setData } = Paikat();
  const [int, setInt] = useState(1);
  const [dataSlice, setDataSlice] = useState(data.slice(0, 1));
  const navigation = useNavigation();


  const nextItem = () => {
    if (int === 1) {
      setDataSlice(data.slice(1, 2));
      setInt(2);
      console.log("intti" + int);
      console.log("data" + data.length);
    } else if (int === 2) {
      console.log("intti" + int);
      console.log("data" + data.length);
      setInt(3);
      setDataSlice(data.slice(2, 3));
    }
  };

  const lastItem = () => {
    if (int === 3) {
      setDataSlice(data.slice(1, 2));
      setInt(2);
      console.log("intti" + int);
      console.log("data" + data.length);
    } else if (int === 2) {
      console.log("intti" + int);
      console.log("data" + data.length);
      setInt(1);
      setDataSlice(data.slice(0, 1));
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
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText} onPress={() => navigation.navigate('työntekijäLista')}>Valitse aktiviteetti</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
//onPress={navigation.navigate('työntekijäLista')}
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSlice}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
      <View style={styles.buttons2}></View>
      {int === 1 && (
        <TouchableOpacity style={styles.buttonRight} onPress={nextItem}>
          <Image
            style={styles.imageRight}
            source={require("../assets/arrowRight.png")}
          />
        </TouchableOpacity>
      )}
      {int !== 1 && int !== data.length && (
        <View style={styles.buttons2}>
          <TouchableOpacity style={styles.buttonLeft} onPress={lastItem}>
            <Image
              source={require("../assets/arrowLeft.png")}
              style={styles.imageLeft}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextItem} style={styles.buttonRight}>
            <Image
              source={require("../assets/arrowRight.png")}
              style={styles.imageRight}
            />
          </TouchableOpacity>
        </View>
      )}
      {int === data.length && (
        <TouchableOpacity style={styles.buttonLeft} onPress={lastItem}>
          <Image
            source={require("../assets/arrowLeft.png")}
            style={{
              height: 120,
              aspectRatio: 1,
              marginLeft: 55,
              marginTop: 35,
            }}
          />
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
    right: -50,
    bottom: -40,
    alignSelf: "flex-end",
    backgroundColor: "#EDEAEA",
    borderRadius: 80,
  },
  buttonLeft: {
    height: 150,
    width: 150,
    left: -50,
    bottom: -40,
    alignSelf: "flex-start",
    backgroundColor: "#EDEAEA",
    borderRadius: 80,
  },
  imageRight: {
    height: 120,
    aspectRatio: 1,
    marginTop: 30,
    marginLeft: 30
  },
  imageLeft: {
    height: 120,
    aspectRatio: 1,
    marginLeft: 50,
    marginTop: 30,
  },
  buttons2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: screenWidth * 0.95,
  },

  button: {
    width: 200,
    height: 50,
    backgroundColor: "#3B88C3",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
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
/*
{int === data.length ? (
        <View
          style={{
            position: 'absolute',
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={styles.buttonLeft}>
            <Text style={{ textAlign: "center", marginTop: 50 }}>Nappi</Text>
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
      */
