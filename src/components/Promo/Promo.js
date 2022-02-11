import React, { useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { PromoContextProvider, PromoContext } from '../../context';
import useSendData from '../../hooks/useSendData';
import promoBack from '../../img/promo.webp';

import CloseButton from './CloseButton';
import Title from '../Styled/Title';
import PromoField from './PromoField';
import QrImg from '../Styled/QrImg';

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
  const { status, error } = useSendData();
  console.log('status: ', status);

  return (
    <Container>
      <PromoWrapper>
        <Title>Введите ваш номер мобильного телефона</Title>
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
