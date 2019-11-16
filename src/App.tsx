import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {Root, View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Start from './pages/Start';
import Ideation from './pages/Ideation';
import Suggestion from './pages/Suggestion';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/onboarding';

class App extends React.Component<{},
    {
      activePanel: any;
      fetchedUser: any;
      themes: any[];
      selectedTheme: any;
      token: any;
    }> {
  constructor(props: any) {
    super(props);

    this.state = {
      activePanel: 'start',
      fetchedUser: null,
      themes: ['cool', 'noice', 'sweet'],
      selectedTheme: null,
      token: null,
    };
  }

  componentDidMount() {
    connect.subscribe((e: any) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({fetchedUser: e.detail.data});
          break;
        case 'VKWebAppAccessTokenReceived':
          console.log(e);
          this.setState({token: e.detail.data.access_token});
          connect.send('VKWebAppCallAPIMethod', {
            method: 'junction.getCategories',
            params: {count: 10, v: '5.103', access_token: this.state.token},
          });
          break;
        case 'VKWebAppCallAPIMethodResult':
          console.log(e);
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
    connect.send('VKWebAppGetAuthToken', {app_id: 7210223, scope: ''});
  }

  go = (e: any) => {
    this.setState({activePanel: e.currentTarget.dataset.to});
  };

  updateTheme = (theme: any) => {
    this.setState({selectedTheme: theme});
  };

  render() {
    return (
        <Root activeView="view">
          <View id="view" activePanel={this.state.activePanel} header={false}>
            <Start id="start" go={this.go}/>
            <Onboarding id="onboarding"/>
            <Suggestion id="suggestion" go={this.go} token={this.state.token}
                        selectedTheme={this.state.selectedTheme}/>
            <Ideation
                id="ideation"
                go={this.go}
                updateTheme={this.updateTheme}
                selectedTheme={this.state.selectedTheme}
                suggestions={this.state.themes}
            />
            <Dashboard id="dashboard" go={this.go}/>
          </View>
        </Root>
    );
  }
}

export default App;
