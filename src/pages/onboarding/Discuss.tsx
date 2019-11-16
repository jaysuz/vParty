import React from 'react';
import discuss from './img/discuss.png';

const Discuss = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={discuss} style={{ width: '100%', marginTop: '20vh' }} />
      <h1 style={{ fontWeight: 'bold', fontSize: 24 }}>Discuss</h1>
      <p style={{ fontSize: 18, padding: '0px 50px' }}>
        You can suggest items, vote on them and have a shared basket for
        everything.
      </p>
    </div>
  );
};
export default Discuss;
