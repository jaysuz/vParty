import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = ({id, go}) => (
    <div id={id}>
      <button onClick={() => go('suggestion')}>back</button>
      <h1>Dashboard</h1>
    </div>
);

Dashboard.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Dashboard;
