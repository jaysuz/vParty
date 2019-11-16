import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const ContentContainer = styled.div`
  height: 100vh;
`;
/**
 * Content container with header, 100vh
 */
const Content: React.FC<{
  showLogo?: boolean;
  id?: string;
}> = ({ children, showLogo = true, ...rest }) => (
  <div {...rest}>
    <Header showLogo={showLogo} />
    <ContentContainer>{children}</ContentContainer>
  </div>
);

export default Content;
