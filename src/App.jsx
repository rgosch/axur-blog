import React from 'react';

import { GlobalStyle } from 'visual/styles/global';
import { Header } from 'components/Header';
import { PostList } from 'pages/PostList';
import { SettingsProvider } from 'contexts/Settings';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <SettingsProvider>
      <PostList />
    </SettingsProvider>
  </>
);

export default App;
