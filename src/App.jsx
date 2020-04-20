import React from 'react';

import { GlobalStyle } from 'visual/styles/global';
import { Header } from 'components/Header';
import { PostList } from 'pages/PostList';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <PostList />
  </>
);

export default App;
