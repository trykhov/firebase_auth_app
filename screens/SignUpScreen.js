import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import  * as firebase from 'firebase';
import { Form, Item, Input, Label, Button } from 'native-base';

export default class SignUpScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: ""
    }
  };
  
  static navigationOptions = {
    title: "Sign Up",
    header: null
  };

  render() {
      return (
        <KeyboardAvoidingView style={styles.container} behavior="position" enabled>
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo.png")}/>
            <Text>LearningCodeOnline.in</Text>
          </View>
          <Form style={styles.form}>
          <Item floatingLabel> 
              <Label>Name</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="name-phone-pad"
                onChangeText={name => this.setState({name})}
              />
            </Item>
            <Item floatingLabel> 
              <Label>Email</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => this.setState({email})}
              />
            </Item>
            <Item floatingLabel> 
              {/* floatingLabe allows the element to float up when clicked on */}
              <Label>Password</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={password => this.setState({password})}  
                secureTextEntry={true}
              />
            </Item>
            <Button 
              style={styles.button}
              full
              rounded
              onPress={() => {}}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </Button>
          </Form>
          <View style={styles.footer}>
            <Text>OR</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("SignIn")}>
              <Text>Already have an account?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
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
    width: "100%"
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
