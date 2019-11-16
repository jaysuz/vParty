import React from 'react';
import { Button } from '@vkontakte/vkui';
import party from './img/party.jpg';
import OnboardingContainer from './components/OnboardingContainer';
import Title from '../../components/Title';
import OnboardingImage from './components/OnboardingImage';
import OnboardingText from './components/OnboardingText';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin: 10vh 10% auto 10%;
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const Party = ({ go }: { go: (e: any) => void }) => {
  return (
    <OnboardingContainer>
      <OnboardingImage src={party} />
      <Title>Party</Title>
      <OnboardingText>
        Have fun on the party and don’t worry about the money.
      </OnboardingText>
      <ButtonContainer>
        <StyledButton size="l" onClick={go} data-to="ideation">
          Let's get started!
        </StyledButton>
      </ButtonContainer>
    </OnboardingContainer>
  );
};
export default Party;
