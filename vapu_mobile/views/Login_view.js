import React, { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import LoginForm from "../components/Login";
import RegisterForm from "../components/RegisterScreen";
import { Button, Text } from "@rneui/themed";
import { hexToRgba } from "../components/utils";

const Login_view = ({ navigation }) => {
  const [showRegForm, setShowRegForm] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 10,
        }}
      >
        {showRegForm ? <RegisterForm /> : <LoginForm />}
        <View
          style={{ flex: 0.5, justifyContent: "flex-end", marginBottom: 20 }}
        >
          <Button
            buttonStyle={{
              width: 300,
              height: 40,
              alignSelf: "center",
            }}
            title={
              showRegForm
                ? "Already have an account? Sign in!"
                : "Don't have an account? Sign up!"
            }
            titleStyle={{
              color: 'black',
            }}
            onPress={() => {
              setShowRegForm(!showRegForm);
            }}
          ></Button>
        </View>
      </View>
    </View>
  );
};

export default Login_view;
