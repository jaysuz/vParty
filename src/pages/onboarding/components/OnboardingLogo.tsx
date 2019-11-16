import React from 'react';
import styled from 'styled-components';
import logo from '../../../img/logo.png';

const StyledImage = styled.img`
  width: 170px;
  margin-top: 20vh;
`;

const OnboardingLogo = () => <StyledImage src={logo} />;

export default OnboardingLogo;
