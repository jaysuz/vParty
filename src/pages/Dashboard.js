import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-connect';
import OverviewRow from '../components/OverviewRow';
import BasketItem from '../components/BasketItem';
import Header from '../components/Header';
import './dashboard.scss';

const Dashboard = ({ id, go, selectedTheme, selectedProducts, token }) => {

  const [items, updateItems] = useState([]);
  const [price, updatePrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await connect.sendPromise('VKWebAppCallAPIMethod', {
        'method': 'junction.getByIds',
        'params': {
          'ids': selectedProducts,
          'v': '5.103',
          'access_token': token,
        },
      });
      updateItems(data.response.map(item => {
        const itemPrice = Number.parseFloat(item.price);
        updatePrice(price + itemPrice);
        return {
          title: item.name.substring(0, 12),
          description: item.description,
          moneyAmount: itemPrice
        }
      }))
    };
    fetchData().catch(error => console.error(error));
  }, []);

  return (
      <div id={id}>
        <Header showLogo={true}/>
        <h1>Party Basket</h1>
        <h3>{selectedTheme ? selectedTheme : 'Cool'} party</h3>
        <div className="overview">
          <OverviewRow amount={price} title="Total sum"/>
          <OverviewRow amount={9.10} title="Amount per person"/>
          <OverviewRow amount={20.90} title="Saved money"/>
        </div>
        <div className="basket">
          {items.map((item, i) => (<BasketItem key={i} title={item.title} description={item.description} moneyAmount={item.moneyAmount}/>))}
        </div>
        <div className="footer">
          <button className="button-back" onClick={() => go('suggestion')}>
            Back
          </button>
          <button className="button-done" onClick={() => go(/* payment */)}>
            Pay
          </button>
        </div>
      </div>
  );
};

Dashboard.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string,
  selectedProducts: PropTypes.array
};

export default Dashboard;
