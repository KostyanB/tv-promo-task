import React, { Suspense } from 'react';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Preloader from './components/Styled/Preloader';
import Promo from './components/Promo';
import Video from './components/Video';

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="promo" element={<Promo />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
export default App;
