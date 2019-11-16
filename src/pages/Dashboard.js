import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = props => (
    <div id={props.id}>
      <button onClick={props.go} data-to="suggestion">back</button>
      <h1>Dashboard</h1>
    </div>
);

Dashboard.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Dashboard;
