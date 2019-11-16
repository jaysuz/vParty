import React from 'react';
import {Button, Div, HeaderButton, IOS, Panel, PanelHeader, platform} from '@vkontakte/vkui';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

class Suggestion extends React.Component {
    componentDidMount () {
        /* TODO: remove later */
        fetch('https://jsonplaceholder.typicode.com/todos/1').
            then(response => response.json()).
            then(data => {
                this.setState({data})
                //console.log(data)
            })

    }

    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render () {
        return (
            <Panel id={this.props.id}>
                <PanelHeader left={<HeaderButton onClick={this.props.go} data-to="ideation">
                    {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                </HeaderButton>}>Recommendations for: {this.props.selectedTheme}</PanelHeader>
                <Div>
                    <Button size="xl" level="2" onClick={this.props.go} data-to="dashboard">
                        Continue
                    </Button>
                </Div>
            </Panel>
        )
    }
}

export default Suggestion
