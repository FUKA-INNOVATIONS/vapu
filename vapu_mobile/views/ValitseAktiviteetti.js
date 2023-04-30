import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import ValitseAktiviteetti from "../components/ValitseAktiviteetti";
import RegisterForm from "../components/RegisterScreen";
import { Button, Text } from "@rneui/themed";
import { hexToRgba } from "../components/utils";

const ValitseAktiviteetti = ({ navigation }) => {
  const [showRegForm, setShowRegForm] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ValitseAktiviteetti></ValitseAktiviteetti>
    </View>
  );
};

export default ValitseAktiviteetti;
