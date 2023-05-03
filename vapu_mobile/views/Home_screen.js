import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import Home from "../components/Home";

const Home_screen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Home></Home>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home_screen;
