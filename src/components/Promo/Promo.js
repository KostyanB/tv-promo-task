import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { PromoContextProvider } from '../../context';
import promoBack from '../../img/promo.webp';

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
  return (
    <Container>
      <PromoWrapper>
        <PromoContextProvider>
          <PromoField />
        </PromoContextProvider>
      </PromoWrapper>
      <CloseButton />
      <QrImg />
    </Container>
  );
};
export default Promo;
