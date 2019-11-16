import React from 'react';
import connect from '@vkontakte/vkui-connect';

// TODO: remove later
/*
fetch('https://jsonplaceholder.typicode.com/todos/1').
    then(response => response.json()).
    then(data => {
        this.setState({data})
        //console.log(data)
    })*/

const Suggestion = ({id, go, token, selectedTheme}) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppCallAPIMethodResult':
          console.log(e.detail.data.response);
          setItems(e.detail.data.response);
          break;
        default:
          console.log(e.detail.type);
      }
    });
    if (token)
      connect.send('VKWebAppCallAPIMethod', {
        'method': 'junction.getByIds',
        'params': {
          'ids': '4000109446937,32222023154',
          'v': '5.103',
          'access_token': token,
        },
      });
    return () => connect.unsubscribe();
  }, [token]);

  /*    const test = () => {
    }*/

  return (
      <div id={id}>
        <h1>Suggestions on: {selectedTheme}</h1>
        <button onClick={go} data-to="ideation">Back</button>
        {items.map((item, i) => <div key={i}>
          {item.name}
          <img height={200} src={item.picture} alt={item.name}/>
        </div>)}
        <div>
          <button onClick={go} data-to="dashboard">
            Continue
          </button>
        </div>
      </div>
  );
};

export default Suggestion;
