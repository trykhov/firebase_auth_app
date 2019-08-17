import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';

// importing all screens
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

let firebaseConfig = { // from the firebase website after clicking on the </> button
  apiKey: "AIzaSyC1AC08ZnST0_R3ToAxGBZ0b8Ma-clcLds",
  authDomain: "reactbootcamp-fab67.firebaseapp.com",
  databaseURL: "https://reactbootcamp-fab67.firebaseio.com",
  projectId: "reactbootcamp-fab67",
  storageBucket: "",
  messagingSenderId: "897342952156",
  appId: "1:897342952156:web:b74577d2a19c40af"
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: { screen: LoadingScreen},
    SignIn: { screen: SignInScreen},
    SignUp: { screen: SignUpScreen},
    Home: { screen: HomeScreen},
  },
  {
    // launcher screen
    initialRouteName: "Loading"
  }
)

const App = createAppContainer(MainNavigator);
export default App;
