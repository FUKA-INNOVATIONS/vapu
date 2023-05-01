import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import AktiviteettiLista from "../components/AktiviteettiLista";
import { Aktiviteetit } from "../utils/lists";

const ValitseAktiviteetti = ({ navigation }) => {
  const { data, setData } = Aktiviteetit();
  const [dataSlice, setDataSlice] = useState(data.slice(0, 7));
  const [showMore, setShowMore] = useState(false);

  const handlePress = () => {
    showMore ? setDataSlice(data.slice(0, 7)) : setDataSlice(data.slice(7, 14));
    
    setShowMore(!showMore);
  };

  const text1 = `Näytä
 lisää`;
const text2 = `Näytä
vähemmän`;
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.text}>Mitä tehdään?</Text>
      </View>
      <View style={styles.box2}>
        <FlatList
          style={styles.list}
          data={dataSlice}
          renderItem={({ item }) => <AktiviteettiLista item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
        <View
          style={{
            height: 50,
            width: 50,
            position: "absolute",
            bottom: 120,
            right: 100,
          }}
        >
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.text2}>
              {showMore ? text2 : text1}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  box1: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  box2: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 27,
    fontWeight: "bold",
  },
  button: {
    height: 200,
    width: 200,
    backgroundColor: "#EDEAEA",
    alignItems: "center",
    borderRadius: 150,
  },
  list: {
    position: "relative",
  },
  text2: {
    marginTop: 50,
    fontSize: 30,
    color: "#3B88C3",
  },
});

export default ValitseAktiviteetti;
