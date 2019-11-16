import React from 'react';
import OnboardingContainer from './components/OnboardingContainer';
import OnboardingLogo from './components/OnboardingLogo';
import Title from '../../components/Title';

const Welcome = () => {
  return (
    <OnboardingContainer>
      <OnboardingLogo />
      <div style={{ marginTop: '20vh' }}>
        <Title>Organise your Party</Title>
        <p style={{ fontSize: 18, padding: '0px 50px', marginTop: '5vh' }}>
          Use vParty to organise and purchase all your items together
        </p>
      </div>
    </OnboardingContainer>
  );
};
export default Welcome;
