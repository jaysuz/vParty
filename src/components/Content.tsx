import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const ContentContainer = styled.div`
  height: 100vh;
`;
/**
 * Content container with header, 100vh
 */
const Content = ({
  children,
  showLogo = true,
  ...rest
}: {
  children: JSX.Element[] | JSX.Element;
  showLogo?: boolean;
  title: string;
} & React.FC &
  any) => (
  <div {...rest}>
    <Header showLogo={showLogo} />
    <ContentContainer>{children}</ContentContainer>
  </div>
);

export default Content;
