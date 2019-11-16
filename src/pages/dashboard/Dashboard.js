import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content';
import Title from '../../components/Title';

const Dashboard = props => (
    <Content id={props.id}>
      <div style={{ paddingTop: '10vh', paddingRight: '10px', padingLeft: '10px' }}>
        <Title>Party basket</Title>
      

        <button onClick={props.go} data-to="suggestion">back</button>
        <h2>Hallween Party - 17.11.2019</h2>

        <div>
          <p>Total sum</p>
          <p>Amount per person</p>
          <p>Saved money</p>
          <p>Purchase before 13.11.2019</p>
          <button>Purchase</button>
        </div>


        <div>
          <div>
            <img></img>
            <p>Pumpkins</p>
            <p>Stuff with pumpkins which is very cool ...</p>
            <p>$ 4</p>
            <div>upvote 9</div>
            <div>downvote 1</div>
          </div>
        </div>


        <div>
          <p>Add</p>
        </div>
      </div>
    </Content>
);

Dashboard.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Dashboard;
