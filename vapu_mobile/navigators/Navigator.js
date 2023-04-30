import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PropTypes from "prop-types";
import Home from "../components/Home";
import Login from "../views/Login_view";
import Mood from "../components/Mood";
import Register from '../components/RegisterScreen';
import ListEmployees from '../components/ListEmployees';
import Asiakaspalvelu from "../components/Asiakaspalvelu";
import ValitseAktiviteetti from "../components/ValitseAktiviteetti";


const Stack = createNativeStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: hexToRgba("#3B88C3", 0.8),
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Mieliala" component={Mood} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Register" component={Register}/>
      <Stack.Screen name="ListEmployees" component={ListEmployees}/>
      <Stack.Screen name="Asiakaspalvelu" component={Asiakaspalvelu}/>
      <Stack.Screen name="Aktiviteetit" component={ValitseAktiviteetti}/>
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackScreen />
    </NavigationContainer>
  );
};

const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

Navigator.propTypes = {
  navigation: PropTypes.object,
};

export default Navigator;
