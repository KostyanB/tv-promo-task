import React from 'react';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { ContextProvider } from './context';

import Promo from './components/Promo';
import VideoBlock from './components/VideoBlock';

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        {/* <Promo /> */}
        <VideoBlock />
      </ContextProvider>
    </>
  );
}
export default App;
