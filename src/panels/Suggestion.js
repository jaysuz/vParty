import React from 'react'
import { Panel, PanelHeader } from '@vkontakte/vkui'

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
        super(props)
        this.state = {
        }
    }

    render () {
        return (
            <Panel id={this.props.id}>
                <PanelHeader>vPary Recommender</PanelHeader>
            </Panel>
        )
    }
}

export default Suggestion
