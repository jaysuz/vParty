import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Start from './panels/Start';
import Ideation from "./panels/Ideation";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'start',
			fetchedUser: null,
			themes: [
				'cool',
				'noice',
				'sweet'
			],
			selectedTheme: null
		};
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
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
				<Home id="home" fetchedUser={this.state.fetchedUser} go={this.go} />
				<Persik id="persik" go={this.go} />
				<Start id="start" go={this.go}/>
				<Ideation id="ideation"
						  go={this.go}
						  updateTheme={this.updateTheme}
						  selectedTheme={this.state.selectedTheme}
						  suggestions={this.state.themes}
				/>
			</View>
		);
	}
}

export default App;
