import React from 'react';
import { Panel, Button, Div, PanelHeader } from '@vkontakte/vkui';

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showExtra: false,
			textExtra: ''
        };
    }

    reactiveTest(text) {
        this.setState({showExtra: !this.state.showExtra});
        this.setState({textExtra: text});
    }

    render() {
        return (
        	<Panel id={this.props.id}>
				<PanelHeader>vPary</PanelHeader>
				<Div>
					Welcome vkParty, the ultimate platform to organize all the
					for your super amazing party.
				</Div>
				<Div>
					<Button size="xl" level="2" onClick={this.props.go} data-to="ideation">
						Let's go
					</Button>
				</Div>
				<Div>
					<Button size="xl" level="2" onClick={this.props.go} data-to="home">
						Go to template
					</Button>
				</Div>
				<Div>
					<Button sizle="xl" onClick={() => this.reactiveTest('yo it tweaks')}>
						I am reactive
					</Button>
				</Div>
				{ this.state.showExtra && <Div>{this.state.textExtra}</Div>}
			</Panel>
        );
    }
}

export default Start;
