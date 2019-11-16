import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
`;

const Title = ({ children }: { children: string }) => (
  <StyledH1 style={{ fontWeight: 'bold', fontSize: 24 }}>{children}</StyledH1>
);

export default Title;
