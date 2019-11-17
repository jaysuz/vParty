import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import connect from '@vkontakte/vk-connect';
import OverviewRow from '../components/OverviewRow';
import BasketItem from '../components/BasketItem';
import Header from '../components/Header';
import './dashboard.scss';

import firebase from 'firebase';

const Dashboard = ({
  id,
  go,
  selectedTheme,
  selectedProducts,
  token,
  groupId
}) => {
  const [items, updateItems] = useState([]);
  const [price, updatePrice] = useState(0);

  const [votes, setVotes] = useState(null);

  useEffect(() => {
    return firebase
      .firestore()
      .collection('communities')
      .doc(groupId)
      .collection('products')
      .onSnapshot(snapshot => {
        if (snapshot.empty) {
          Promise.all(
            items.map(i =>
              firebase
                .firestore()
                .collection('communities')
                .doc(groupId)
                .collection('products')
                .doc(i.id)
                .set({ positives: 0, negatives: 0 })
            )
          );
        } else {
          Promise.all(snapshot.docs.map(doc => setVotes(doc.data().votes)));
        }
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await connect.sendPromise('VKWebAppCallAPIMethod', {
        method: 'junction.getByIds',
        params: {
          ids: selectedProducts,
          v: '5.103',
          access_token: token
        }
      });
      updateItems(
        data.response.map(item => {
          const itemPrice = Number.parseFloat(item.price);
          updatePrice(price => price + itemPrice);
          return {
            id: item.id,
            title: item.name.substring(0, 12),
            description: item.description,
            moneyAmount: itemPrice,
            image: item.picture
          };
        })
      );
    };
    fetchData().catch(error => console.error(error));
  }, []);

  return (
    <div id={id}>
      <Header showLogo={true} />
      <h1>Party Basket</h1>
      <h3 className="capitalize">
        {selectedTheme ? selectedTheme : 'Cool'}
        party
      </h3>
      <div className="overview">
        <OverviewRow amount={price} title="Total sum" />
        <OverviewRow amount={9} title="Amount per person" />
        <OverviewRow amount={21} title="Saved money" />
      </div>

      <div className="basket">
        {items.map((item, i) => (
          <BasketItem
            key={i}
            title={item.title}
            image={item.image}
            description={item.description}
            moneyAmount={item.moneyAmount}
            updateVotes={setVotes}
          />
        ))}
      </div>

      <div className="footer">
        <button className="button-back" onClick={() => go('suggestion')}>
          Back
        </button>
        <button className="button-done" onClick={() => go('finish')}>
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
