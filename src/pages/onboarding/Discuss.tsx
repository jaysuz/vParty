import React from 'react';
import discuss from './img/discuss.png';
import OnboardingContainer from './components/OnboardingContainer';
import Title from '../../components/Title';

const Discuss = () => {
  return (
    <OnboardingContainer>
      <img src={discuss} style={{ width: '100%', marginTop: '20vh' }} />
      <Title>Discuss</Title>
      <p style={{ fontSize: 18, padding: '0px 50px', marginTop: '5vh' }}>
        You can suggest items, vote on them and have a shared basket for
        everything.
      </p>
    </OnboardingContainer>
  );
};
export default Discuss;
