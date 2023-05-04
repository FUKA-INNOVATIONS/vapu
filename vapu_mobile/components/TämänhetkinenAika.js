import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function CurrentDate() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();
    setCurrentDate(`${day}.${month}.${year}`);
  }, []);

  return (
      <Text style={styles.date}>{currentDate}</Text>
  );
}

const styles = StyleSheet.create({
    date: {
        fontSize: 25,
        fontWeight: "bold",
        height: 30,
      }
})








