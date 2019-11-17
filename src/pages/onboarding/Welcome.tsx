import React from 'react';
import OnboardingContainer from './components/OnboardingContainer';
import OnboardingLogo from './components/OnboardingLogo';
import Title from '../../components/Title';
import OnboardingText from './components/OnboardingText';

const Welcome = () => {
  return (
    <OnboardingContainer>
      <OnboardingLogo />
      <div style={{ marginTop: '20vh' }}>
        <Title>Organise your Party</Title>
        <OnboardingText>
          Use vkParty to organise and purchase all your items together
        </OnboardingText>
      </div>
    </OnboardingContainer>
  );
};
export default Welcome;
