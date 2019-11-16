import React from "react";
import connect from "@vkontakte/vkui-connect";
import { View } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import './general.css';

import Onboarding from "./pages/onboarding";
import Ideation from "./pages/Ideation";
import Suggestion from "./pages/suggestion/Suggestion";
import Dashboard from "./pages/Dashboard";

import * as firebase from 'firebase/app';
import 'firebase/firestore';
        
const firebaseConfig = {
    apiKey: 'AIzaSyClvn2v_Q-fIhswD2OxdKPo9ox1ucWFWds',
    authDomain: 'vparty-2e352.firebaseapp.com',
    databaseURL: 'https://vparty-2e352.firebaseio.com',
    projectId: 'vparty-2e352',
    storageBucket: 'vparty-2e352.appspot.com',
    messagingSenderId: '633693236641',
    appId: '1:633693236641:web:04ff34eda4a7e133a3efe0'
};

class App extends React.Component<
  {},
  {
    activePanel: any;
    fetchedUser: any;
    themes: any[];
    selectedTheme: any;
    token: any;
  }
> {
  constructor(props: any) {
    super(props);

    firebase.initializeApp(firebaseConfig);

    this.state = {
      activePanel: "onboarding",
      fetchedUser: null,
      themes: ["cool", "noice", "sweet"],
      selectedTheme: null,
      token: null
    };
  }

  componentDidMount() {
    connect.subscribe((e: any) => {
      switch (e.detail.type) {
        case "VKWebAppGetUserInfoResult":
          this.setState({ fetchedUser: e.detail.data });
          break;
        case "VKWebAppAccessTokenReceived":
          console.log(e);
          this.setState({ token: e.detail.data.access_token });
          connect.send("VKWebAppCallAPIMethod", {
            method: "junction.getCategories",
            params: { count: 10, v: "5.103", access_token: this.state.token }
          });
          break;
        case "VKWebAppCallAPIMethodResult":
          console.log(e);
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send("VKWebAppGetUserInfo", {});
    connect.send("VKWebAppGetAuthToken", { app_id: 7210223, scope: "" });
  }

  go = (e: any) => {
    this.setState({ activePanel: e.currentTarget.dataset.to });
  };

  updateTheme = (theme: any) => {
    this.setState({ selectedTheme: theme });
  };

  render() {
    return (
      <View id="view" className='global' activePanel={this.state.activePanel} header={false}>
        <Onboarding id="onboarding" go={this.go} />
        <Suggestion
          id="suggestion"
          go={this.go}
          token={this.state.token}
          selectedTheme={this.state.selectedTheme}
        />
        <Ideation
          id="ideation"
          go={this.go}
          db={firebase.firestore()}
          updateTheme={this.updateTheme}
          selectedTheme={this.state.selectedTheme}
          suggestions={this.state.themes}
        />
        <Dashboard id="dashboard" go={this.go} />
      </View>
    );
  }
}

export default App;
