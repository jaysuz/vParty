import React from 'react';
import styled from 'styled-components';
import logo from '../../../img/logo.png';
import OnboardingImage from './OnboardingImage';

const StyledImage = styled(OnboardingImage)`
  width: 170px;
`;

const OnboardingLogo = () => <StyledImage src={logo} />;

export default OnboardingLogo;
