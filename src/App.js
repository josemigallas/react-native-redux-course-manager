import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import firebase from "firebase";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
