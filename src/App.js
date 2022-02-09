import React from 'react';
// import './App.scss';
import { GlobalStyle } from './components/Styled/GlobalStyle';

import Promo from './components/Promo';

function App() {
  console.log('work');

  return (
    <>
      <GlobalStyle />
      <Promo />
    </>
  );
}
export default App;
