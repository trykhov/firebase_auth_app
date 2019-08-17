import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';


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

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
