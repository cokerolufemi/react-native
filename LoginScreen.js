import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

        <View style={styles.LoginHeaderContainer}>
          <Image style={styles.Image} source={require("./assets/signup.png")} />
          <Text style={styles.LoginHeader}>Log in</Text>
        </View>
        <View >
          <TextInput
            placeholderTextColor="black"
            placeholder="Username"
            onChangeText={(email) => {
              console.log(email);
              this.setState({ email: email })
            }}
            style={styles.input}
          />
          <TextInput
            placeholderTextColor="black"
            placeholder="Password"
            onChangeText={(password) => {
              console.log(password);
              this.setState({ password: password })
            }}
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.ForgotPassword}>Forgot Password</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noaccount}>
          <Text style={styles.noaccountText}>Don't have account?</Text>
          <Text style={styles.SignupText}> Sign up</Text>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginVertical: 5
  },
  input: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#2c4ddb",
    fontSize: 20,
    marginVertical: 15,
    placeholderTextColor: "#CCCDC6"
  },
  LoginHeaderContainer: {
    marginBottom: 30,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  LoginHeader: {
    fontSize: 50,
    color: "#5082d9",
    fontWeight: "bold",
    height: 70,
    fontStyle: ""
  },
  ForgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 3,
    color: "#2c8cdb"
  },
  buttonContainer: {
    height: 50,
    backgroundColor: "#5082d9",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 5
  },
  buttonText: {
    color: "white",
    fontSize: 25,
  },
  noaccount: {
    flexDirection: "row",
    justifyContent: "center"
  },
  noaccountText: {
    marginRight: 6,
    fontSize: 16,
  },
  SignupText: {
    marginRight: 10,
    fontSize: 16,
    color: "#5082d9"
  },
  Image: {
    width: 100,
    height: 100,
    marginVertical: 4,
    alignSelf: "center",
    borderRadius: 50
  },
});
