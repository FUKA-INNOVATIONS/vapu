import {
    Text,
    StyleSheet,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
  } from "react-native";
  import PropTypes from "prop-types";
  
  const RegisterScreen = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View
          style={{
            marginTop: 60,
            display: "flex",
            borderWidth: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 29,
              color: "#000000",
              marginLeft: 100,
              marginTop: 100,
              marginBottom: 30,
              fontWeight: "bold",
            }}
          >
            Rekisteröinti
          </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Email."
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
            />
          </View>
  
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
  
          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  };
  const styles = StyleSheet.create({
    inputView: {
      backgroundColor: "#3B88C3",
      borderRadius: 30,
      width: "75%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#3B88C3",
    },
  });

  export default RegisterScreen;



  /*return (
    <View
      style={{
        backgroundColor: '#272848',
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: '#272848',
          flex: 10,
        }}
      >
        {showRegForm ? <RegisterForm /> : <LoginForm />}
      </View>
      <View style={{flex: 0.5, justifyContent: 'flex-end', marginBottom: 20}}>
        <Button
          buttonStyle={{
            width: 270,
            height: 40,
            backgroundColor: '#262848',
            alignSelf: 'center',
          }}
          title={showRegForm ? 'Already have an account? Sign in!' : "Don't have an account? Sign up!"}
          onPress={() => {
            setShowRegForm(!showRegForm);
          }}
        ></Button>
      </View>
    </View>
  );
*/