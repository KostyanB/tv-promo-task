import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { animated, useTransition, config } from 'react-spring';
// components
import VideoBlock from '../VideoBlock';
import Promo from '../Promo';

// const Promo = lazy(() => import('../Promo'));

const AnimaRoutes = () => {
  const location = useLocation();

  const transitionToPage = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
  });
  /*
   * в стиль animated.div добавлен gridArea: '1/-1' для компенсации
   * смещения при одновременном роутинге двух element
   * #root задан 'display: grid'
   */
  return transitionToPage((props, item) => (
    <animated.div style={{ ...props, gridArea: '1/-1' }}>
      <Routes location={item}>
        <Route path="/" element={<VideoBlock />} />
        <Route path="promo" element={<Promo />} />
      </Routes>
    </animated.div>
  ));

  // return (
  //   <Routes>
  //     <Route path="/" element={<VideoBlock />} />
  //     <Route path="promo" element={<Promo />} />
  //   </Routes>
  // );
};
export default AnimaRoutes;
