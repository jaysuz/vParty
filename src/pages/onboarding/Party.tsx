import React from 'react';
import { Button } from '@vkontakte/vkui';
import party from './img/party.jpg';

const Party = ({ go }: { go: (e: any) => void }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={party} style={{ width: '100%', marginTop: '20vh' }} />
      <h1 style={{ fontWeight: 'bold', fontSize: 24 }}>Party</h1>
      <p style={{ fontSize: 18, padding: '0px 50px' }}>
        Have fun on the party and don’t worry about the money.
      </p>
      <Button size="xl" level="2" onClick={go} data-to="ideation">
        Let's go
      </Button>
    </div>
  );
};
export default Party;
