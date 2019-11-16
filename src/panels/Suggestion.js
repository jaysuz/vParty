import React from 'react'
import connect from '@vkontakte/vkui-connect'
import {
    Button,
    Div,
    HeaderButton,
    IOS,
    Panel,
    PanelHeader,
    platform,
} from '@vkontakte/vkui'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back'
import Icon24Back from '@vkontakte/icons/dist/24/back'

const osname = platform()

// TODO: remove later
/*
fetch('https://jsonplaceholder.typicode.com/todos/1').
    then(response => response.json()).
    then(data => {
        this.setState({data})
        //console.log(data)
    })*/

const Suggestion = ({id, go, token, selectedTheme}) => {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        connect.subscribe((e) => {
            switch (e.detail.type) {
                case 'VKWebAppCallAPIMethodResult':
                    console.log(e.detail.data.response)
                    setItems(e.detail.data.response)
                    break
                default:
                    console.log(e.detail.type)
            }
        })
        if (token)
            connect.send('VKWebAppCallAPIMethod', {
                'method': 'junction.getByIds',
                'params': {
                    'ids': '4000109446937,32222023154',
                    'v': '5.103',
                    'access_token': token,
                },
            })
        return () => connect.unsubscribe()
    }, [token])

    const test = () => {

    }

    return (
        <div id={id}>
            <PanelHeader left={<HeaderButton onClick={go} data-to="ideation">
                {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
            </HeaderButton>}>Recommendations for: {selectedTheme}</PanelHeader>
            {items.map((item, i) => <div key={i}>
                {item.name}
                <img height={200} src={item.picture} />
            </div>)}
            <Div>
                <Button size="xl" level="2" onClick={go} data-to="dashboard">
                    Continue
                </Button>
            </Div>
        </div>
    )
}

export default Suggestion
