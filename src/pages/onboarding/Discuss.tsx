import React from 'react';
import discuss from './img/discuss.png';
import OnboardingContainer from './components/OnboardingContainer';
import Title from '../../components/Title';
import OnboardingImage from './components/OnboardingImage';
import OnboardingText from './components/OnboardingText';

const Discuss = () => {
  return (
    <OnboardingContainer>
      <OnboardingImage src={discuss} />
      <Title>Discuss</Title>
      <OnboardingText>
        You can suggest items, vote on them and have a shared basket for
        everything.
      </OnboardingText>
    </OnboardingContainer>
  );
};
export default Discuss;
