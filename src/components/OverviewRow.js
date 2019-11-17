import React from 'react';
import PropTypes from 'prop-types';

const OverviewRow = ({ title, amount, currency }) => {

  return (
      <div className="overview__row">
        <div>{title}</div>
        <div><span style={{marginRight: '0.25rem'}}>{currency}</span><span>{amount}</span></div>
      </div>
  );
};

OverviewRow.defaultProps = {
  currency: '$'
};

OverviewRow.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default OverviewRow;
