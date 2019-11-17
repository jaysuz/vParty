import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import OverviewRow from '../components/OverviewRow';

import './dashboard.scss';
import BasketItem from '../components/BasketItem';
import Header from '../components/Header';

const Dashboard = ({ id, go, selectedTheme }) => {

  const [items, updateItems] = useState([
    {title: 'Ho', description: 'Yo', moneyAmount: 23},
    {title: 'Ho', description: 'Yo', moneyAmount: 56}
  ]);

  return (
      <div id={id}>
        <Header showLogo={true}/>
        <h1>Party Basket</h1>
        <h3>{selectedTheme ? selectedTheme : 'Cool'} party</h3>
        <div className="overview">
          <OverviewRow amount={63.40} title="Total sum"/>
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
};

export default Dashboard;
