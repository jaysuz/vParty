import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Start from './panels/Start';
import Ideation from "./panels/Ideation";
import Suggestion from './panels/Suggestion'

import Onboarding from "./pages/onboarding"
class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'onboarding',
			fetchedUser: null,
			themes: [
				'cool',
				'noice',
				'sweet'
			],
			selectedTheme: null,
			token: null
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				case 'VKWebAppAccessTokenReceived':
					console.log(e);
                    this.setState({ token: e.detail.data.access_token });
                    connect.send("VKWebAppCallAPIMethod", {"method": "junction.getCategories", "params": {"count": 10, "v":"5.103", "access_token":this.state.token}});
					break;
				case 'VKWebAppCallAPIMethodResult':
					console.log(e);
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
		connect.send("VKWebAppGetAuthToken", {"app_id": 7210223, "scope": ""});
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	updateTheme = theme => {
		this.setState({ selectedTheme: theme })
	};

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Onboarding id="onboarding"/>
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Persik id="persik" go={this.go} />
				<Start id="start" go={this.go}/>
				<Ideation id="ideation"
						  go={this.go}
						  updateTheme={this.updateTheme}
						  selectedTheme={this.state.selectedTheme}
						  suggestions={this.state.themes}
				/>
				<Suggestion id="suggestion" go={this.go}/>
			</View>
		);
	}
}

export default App;
