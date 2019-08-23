import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'native-base';


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    }
  };

  // componentDidMount() {
  //   this.setState()
  // }

  render() {
      return (
          <View style={styles.container}>
              <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} />
                <Text>LearnCodeOnline.in</Text>
              </View>
              <View style={styles.userDetails}>
                <Text>Hey {this.state.name}</Text>
                <Text>You are signed in as: {this.state.email}</Text>
              </View>
              <Button style={styles.button}
                full 
                rounded 
                success 
                onPres={() => {}}
              >
                <Text style={styles.buttonText}>Sign Out</Text>
              </Button>
          </View>
      ) 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  }
});
