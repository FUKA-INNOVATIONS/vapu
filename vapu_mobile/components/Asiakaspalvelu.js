import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Asiakaspalvelu = () => {
  const vapu = require("../assets/vapu_icon.png");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours >= 8 && hours < 17) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image source={vapu} style={styles.imageMain}></Image>
      <Image source={vapu} style={styles.image2nd}></Image>
      <Image source={vapu} style={styles.image3rd}></Image>

      <Text style={styles.title}>Asiakaspalvelu</Text>
      <Text style={styles.desc}>
        Avoinna arkisin joka päivä 8:00-17:00
      </Text>

      {isOpen ? (
        <View style={styles.lowerTitle}>
          <Text style={styles.call}>Soita</Text>
          <Text style={styles.status}>Auki</Text>
        </View>
      ) : (
        <View style={styles.lowerTitle}>
          <Text style={styles.call}>Soita</Text>
          <Text style={styles.status}>Suljettu</Text>
        </View>
      )}

      <Text style={styles.desc}>
        Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttontxt}>Aloita puhelu</Text>
      </TouchableOpacity>
      <View style={styles.lowerTitle}>
        <Text style={styles.call}>Chattaile</Text>
        <Text style={styles.status}>Auki</Text>
      </View>
      <Text style={styles.desc}>
        Lorem ipsum on 1500-luvulta lähtien olemassa ollut teksti.
      </Text>
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
});
export default Asiakaspalvelu;
