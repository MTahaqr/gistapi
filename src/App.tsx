import React from 'react';
import styled from 'styled-components';
// import Header from './components/Header';
import GistListPage from './container/GistListPage';
import GlobalStyles from './GlobalStyle';

const App = () => {
  return (
    <Wrapper className='App' data-testid='app'>
      <GlobalStyles />
      <GistListPage />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
