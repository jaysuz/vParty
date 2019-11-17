import React from 'react';
import PropTypes from 'prop-types';

const OverviewRow = ({ title, amount, currency }) => {

  return (
      <div className="overview__row">
        <div>{title}</div>
        <div><span>{amount}</span><span style={{marginLeft: '0.25rem'}}>{currency}</span></div>
      </div>
  );
};

OverviewRow.defaultProps = {
  currency: '.–'
};

OverviewRow.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired
};

export default OverviewRow;
