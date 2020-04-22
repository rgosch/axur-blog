import React from 'react';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Header } from 'components/Header';
import { PostList } from 'pages/PostList';
import { SettingsProvider } from 'contexts/Settings';
import { Footer } from 'components/Footer';

export const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <SettingsProvider>
      <PostList />
    </SettingsProvider>
    <Footer />
  </>
);

export default App;
