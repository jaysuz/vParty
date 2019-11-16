import styled from 'styled-components';
import Header from './Header';

const ContentContainer = styled.div`
  height: 100vh;
`;

const Content = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
  <div>
    <Header />
    <ContentContainer>{children}</ContentContainer>
  </div>
);

export default Content;
