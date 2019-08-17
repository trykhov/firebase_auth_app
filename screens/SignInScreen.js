import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class SignInScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  static navigationOptions = {
    title: "Sign In",
    header: null
  };

    render() {
        return (
            <View style={styles.container}>
                <Text>SignInScreen</Text>
            </View>
            )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});
