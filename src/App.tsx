import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './general.css';

import Onboarding from './pages/onboarding';
import Ideation from './pages/ideation/Ideation';
import Suggestion from './pages/suggestion/Suggestion';
import Dashboard from './pages/Dashboard';

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

const getQueryParams = (): QueryParams => {
  return window.location.search
    .slice(1)
    .split('&')
    .map(queryParam => {
      let kvp = queryParam.split('=');
      return { key: kvp[0], value: kvp[1] };
    })
    .reduce((query: any, kvp) => {
      const value = Number(kvp.value);
      query[kvp.key] = isNaN(value) ? kvp.value : value;
      return query;
    }, {});
};

class App extends React.Component<
  {},
  {
    activePanel: Panels;
    fetchedUser: any;
    themes: any[];
    selectedTheme: any;
    token: any;
    selectedProducts: any;
  }
> {
  constructor(props: any) {
    super(props);

    firebase.initializeApp(firebaseConfig);

    this.state = {
      activePanel: 'onboarding',
      fetchedUser: null,
      themes: ['cool', 'noice', 'sweet'],
      selectedTheme: null,
      token: null,
      selectedProducts: ['4000109446937', '32222023154']
    };
  }

  componentDidMount() {
    const { vk_group_id } = getQueryParams();

    connect.subscribe((e: any) => {
      console.log(e);
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          console.log(e.detail.data);
          this.setState({ fetchedUser: e.detail.data });
          break;
        case 'VKWebAppAccessTokenReceived':
          this.setState({ token: e.detail.data.access_token });
          break;
        default:
      }
    });

    connect.send('VKWebAppGetUserInfo', {});
    connect.send('VKWebAppGetAuthToken', { app_id: 7210223, scope: '' });
    console.log(vk_group_id);
    connect.send('VKWebAppGetCommunityAuthToken', {
      app_id: 7210223,
      group_id: vk_group_id,
      scope: 'manage'
    });
  }

  go = (id: Panels) => {
    this.setState({ activePanel: id });
  };

  updateTheme = (theme: any) => {
    this.setState({ selectedTheme: theme });
  };

  addProduct = (productId: any) => {
    let selectedProducts = this.state.selectedProducts;
    selectedProducts.push(productId);
    this.setState({ selectedProducts: selectedProducts });
    console.log(this.state.selectedProducts);
  };

  removeProduct = (productId: any) => {
    let selectedProducts = this.state.selectedProducts;
    selectedProducts.splice(selectedProducts.indexOf(productId), 1);
    this.setState({ selectedProducts: selectedProducts });
  };

  render() {
    return (
      <View
        className="global"
        activePanel={this.state.activePanel}
        header={false}
      >
        <Onboarding id="onboarding" go={this.go} />
        <Suggestion
          id="suggestion"
          go={this.go}
          token={this.state.token}
          selectedTheme={this.state.selectedTheme}
          selectedProducts={this.state.selectedProducts}
          addProduct={this.addProduct}
          removeProduct={this.removeProduct}
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
