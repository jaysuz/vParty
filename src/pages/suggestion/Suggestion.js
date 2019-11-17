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

const Suggestion = ({id, go, token, selectedTheme, selectedProducts, addProduct, removeProduct}) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppCallAPIMethodResult':
          setItems(e.detail.data.response);
          break;
        default:
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
      case 'bachelor party':
        return '1107224469,32903656360,33014199141,32674322264,4000124209946,32428942825';
      case 'wedding':
        return '33011182421,4000064732688,32999498472,4000113819335,33060251857,33044088236,32966690403,33052723312,32818436296,4000190573177,33014783427,32788501860,32980421109';
      case 'birthday':
        return '32945405427,32835468750,32860349513';
      case 'halloween':
        return '4000102606693,4000263294862,32971082914,4000109446937,32222023154,32993494222,32384618692,4000151882686,32993494222';
      case 'techno':
        return '32806084283,32987634589,32880069754,4000247116661,32841211906,32878181662';
      case 'harry potter':
        return '32411999028,32901707600,32807900608';
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
              <div className={
                'item-card ' +
                (selectedProducts.includes(item.product_id)
                    ? 'selected' : '')} key={i}
                   onClick={
                     () => {
                       if (!selectedProducts.includes(item.product_id))
                         return addProduct(item.product_id);
                       else return removeProduct(item.product_id);
                     }
                   }>
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
