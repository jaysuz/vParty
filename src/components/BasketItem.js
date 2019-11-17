import React, {useState} from 'react';
import PropTypes from 'prop-types';

const BasketItem = ({ title, moneyAmount, currency, description, image, go }) => {

  const [positives, setPositives] = useState(0);
  const [negatives, setNegatives] = useState(0);

  return (
      <div className="basket-item">
        <figure className="basket-item__img-container">
          <img src={image} alt="Product Icon"/>
        </figure>
        <div style={{flex: 'auto', borderBottom: '1px solid rgba(200, 200, 200, 0.6)', padding: '1rem 1rem 1rem 0', width: '60%'}}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="basket-item-title">{title}</div>
            <div className="basket-item-price"><span>{moneyAmount}</span><span>{currency}</span></div>
          </div>
          <p style={{maxWidth: '80%'}}>{description}</p>
        </div>
        <div style={{position: 'absolute', bottom: '0.5rem', right: '0.5rem'}}>
          <div className="basket-item__reaction basket-item__reaction--positive" onClick={() => setPositives(positives + 1)}>
            👍 <span>{positives}</span>
          </div>
          <div className="basket-item__reaction basket-item__reaction--negative" onClick={() => setNegatives(negatives + 1)}>
            👎 <span>{negatives}</span>
          </div>
        </div>
      </div>
  );
};

BasketItem.defaultProps = {
  currency: '.–'
};

BasketItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  moneyAmount: PropTypes.number
};

export default BasketItem;
