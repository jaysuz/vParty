import React from 'react';
import { Button } from '@vkontakte/vkui';
import party from './img/party.jpg';
import OnboardingContainer from './components/OnboardingContainer';
import Title from '../../components/Title';

const Party = ({ go }: { go: (e: any) => void }) => {
  return (
    <OnboardingContainer>
      <img src={party} style={{ width: '100%', marginTop: '20vh' }} />
      <Title>Party</Title>
      <p style={{ fontSize: 18, padding: '0px 50px' }}>
        Have fun on the party and don’t worry about the money.
      </p>
      <Button size="xl" level="2" onClick={go} data-to="ideation">
        Let's go
      </Button>
    </OnboardingContainer>
  );
};
export default Party;
