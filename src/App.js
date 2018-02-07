import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";
import reducers from "./reducers";

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBn05kxMjs1vfHPnb2YiTKE2AazZBtSu90",
      authDomain: "manager-9aae2.firebaseapp.com",
      databaseURL: "https://manager-9aae2.firebaseio.com",
      projectId: "manager-9aae2",
      storageBucket: "",
      messagingSenderId: "458808915761"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    )
  }
}

export default App;