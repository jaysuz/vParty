import React from 'react';
import styled from 'styled-components';

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

const Header = () => <Container />;

export default Header;
