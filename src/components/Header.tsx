import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo-no-party.png';

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 79px;
  top: 0px;
  left: 0px;
  background: linear-gradient(180deg, #c4c4c4 0%, rgba(196, 196, 196, 0) 100%);
  opacity: 0.5;
  z-index: 100;
`;

const Logo = styled.img`
  position: absolute;
  z-index: 101;
  left: 15px;
  top: 17px;
  width: 42px;
  height: 46px;
`;

const Header = ({ showLogo = true }: { showLogo?: boolean }) => (
  <>
    {showLogo && <Logo src={logo} />}
    <Container />
  </>
);

export default Header;
