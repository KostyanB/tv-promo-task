import React, { Suspense } from 'react';
import { GlobalStyle } from './components/Styled/GlobalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './context';
import AnimaRoutes from './components/AnimaRoutes';
import Preloader from './components/Styled/Preloader';

import Promo from './components/Promo';
import VideoBlock from './components/VideoBlock';

function App() {
  return (
    <Suspense fallback={<Preloader />}>
      <GlobalStyle />
      <ContextProvider>
        {/* <Promo /> */}
        {/* <VideoBlock /> */}
        <Router>
          <Routes>
            <Route path="/" element={<VideoBlock />} />
            <Route path="promo" element={<Promo />} />
          </Routes>
          {/* <AnimaRoutes /> */}
        </Router>
      </ContextProvider>
    </Suspense>
  );
}
export default App;
