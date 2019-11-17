import React from 'react';
import connect from '@vkontakte/vkui-connect';
import './suggestion.css';
import Header from '../../components/Header';

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
          'ids': getItemsByTheme(selectedTheme),
          'v': '5.103',
          'access_token': token,
        },
      });
    return () => connect.unsubscribe();
  }, [token]);

  const getItemsByTheme = (theme) => {
    switch (theme) {
      case 'birthday':
        return '32888179722,32987433562,4000250046991,33000572377,32969133570,4000075418547,33005748499';
      case 'halloween':
        return '4000109446937,32222023154,32993494222,32384618692,32993494222';
      default:
        return '4000109446937,32222023154';
    }
  };

  return (
      <div id={id}>
        <Header showLogo={true}/>
        <div className="title">Add to your party basket</div>

        <div className="item-container">
          {items.map((item, i) =>
              <div className="item-card" key={i}>
                <img className="item-image" width={171} height={100}
                     src={item.picture} alt={item.name}/>
                <div className="item-name">{item.name.substring(0, 12)}</div>
                <div className="item-price">{item.price}.–</div>
              </div>,
          )}
        </div>

        <div className="footer">
          <button className="button-back" onClick={() => go('ideation')}>
            Back
          </button>
          <button className="button-done" onClick={() => go('dashboard')}>
            Done
          </button>
        </div>
      </div>
  );
};

export default Suggestion;
