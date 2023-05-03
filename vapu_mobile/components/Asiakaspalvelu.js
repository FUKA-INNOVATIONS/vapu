import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

const Asiakaspalvelu = () => {
  const vapu = require("../assets/vapu_icon.png");
  const red = require("../assets/reddot.png");
  const green = require("../assets/greendot.png");

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours >= 8 && hours < 16) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    if (hours >= 8 && hours < 21) {
      setIsOpenChat(true);
    } else {
      setIsOpenChat(false);
    }
  }, []);

  const handleCallPress = () => {
    const phoneNumber = "0123"; // Replace with your desired phone number
    Linking.openURL(`telprompt:${phoneNumber}`);
  };

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={vapu} style={styles.imageMain} />
      <Image source={vapu} style={styles.image2nd} />
      <Image source={vapu} style={styles.image3rd} />

      <Text style={styles.title}>Asiakaspalvelu</Text>
      <Text style={styles.desc}>
        Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti, jota käytetään usein täysa..
      </Text>

      {isOpen ? (
        <View style={styles.lowerTitle}>
          <Text style={styles.call}>Soita</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.status}>Auki</Text>
            <Image style={styles.dot} source={green} />
          </View>
        </View>
      ) : (
        <View style={styles.lowerTitle}>
          <Text style={styles.call}>Soita</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.status}>Suljettu</Text>
            <Image style={styles.dot} source={red} />
          </View>
        </View>
      )}

      <Text style={styles.desc}>Avoinna arkisin joka päivä 8:00-16:00</Text>
      <TouchableOpacity style={styles.button} onPress={handleCallPress}>
        <Text style={styles.buttontxt}>Aloita puhelu</Text>
      </TouchableOpacity>
      {isOpenChat ? (
        <View style={styles.lowerTitle}>
          <Text style={styles.call}>Chattaile</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.status}>Auki</Text>
            <Image style={styles.dot} source={green} />
          </View>
        </View>
      ) : (
        <View style={styles.lowerTitle}>
          <Text style={styles.call}>Chattaile</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text style={styles.status}>Suljettu</Text>
            <Image style={styles.dot} source={red} />
          </View>
        </View>
      )}
      <Text style={styles.desc}>Avoinna arkisin joka päivä 8:00-21:00</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt}>Aloita keskustelu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageMain: {
    alignSelf: "flex-end",
    height: 130,
    aspectRatio: 1,
    marginRight: 25,
    marginTop: -10,
    transform: [{ rotate: "-10deg" }],
  },
  image2nd: {
    alignSelf: "center",
    height: 75,
    aspectRatio: 1,
    marginLeft: 25,
    marginTop: -45,
    transform: [{ rotate: "-10deg" }],
  },
  image3rd: {
    alignSelf: "flex-end",
    height: 75,
    aspectRatio: 1,
    marginRight: 45,
    marginTop: -45,
    transform: [{ rotate: "-10deg" }],
  },
  title: {
    width: "70%",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "left",
  },
  lowerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "70%",
    marginBottom: 10,
  },
  desc: {
    width: "70%",
    alignSelf: "center",
    fontSize: 15,
    marginBottom: 15,
  },
  call: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    marginTop: 15,
  },
  status: {
    textAlign: "right",
    fontSize: 17,
  },
  button: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: "70%",
    backgroundColor: "#EDEAEA",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttontxt: {
    color: "#3B88C3",
    fontSize: 25,
  },
  dot: {
    height: 15,
    width: 15,
    marginLeft: 5,
  },
});
export default Asiakaspalvelu;
