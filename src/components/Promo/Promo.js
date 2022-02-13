import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { PromoContextProvider } from '../../context';
import promoBack from '../../img/promo.webp';
import TabByArrow from '../../helpers/TabByArrow';

import CloseButton from './CloseButton';
import QrImg from '../Styled/QrImg';
import PromoField from './PromoField';

const { mainFill } = env.colors;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-image: url(${promoBack});
  background-repeat: no-repeat;
  background-size: cover;
`;
const PromoWrapper = styled.div`
  width: 380px;
  height: 100%;
  grid-area: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 72px 48px;
  background-color: ${mainFill};
`;

const Promo = () => {
  const promoRef = useRef(null);

  useEffect(() => {
    const list = document.querySelectorAll('[data-tab]');
    const ArrowsTab = new TabByArrow(list);
    const promo = promoRef.current;

    const handleTabByArrow = e => {
      const arrows = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
      if (arrows.includes(e.key)) ArrowsTab.handleFocus(e.key);
    };

    document.addEventListener('keyup', handleTabByArrow);

    const handleClick = e => {
      ArrowsTab.setIndex(e.target);
    };
    promo.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keyup', handleTabByArrow);
      promo.removeEventListener('keyup', handleClick);
    };
  }, [promoRef]);

  return (
    <PromoContextProvider>
      <Container ref={promoRef}>
        <PromoWrapper>
          <PromoField />
        </PromoWrapper>
        <CloseButton />
        <QrImg />
      </Container>
    </PromoContextProvider>
  );
};
export default Promo;
