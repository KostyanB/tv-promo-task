import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { PromoContextProvider } from '../../context/PromoContext';

import promoBack from '../../img/promo.png';

import CloseButton from './CloseButton';
import Title from '../Styled/Title';
import PhoneInput from './PhoneInput';
import NumField from './NumField';
import SubmitButton from './SubmitButton';
import QrImg from '../Styled/QrImg';

const { mainFill } = env.colors;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  background-image: url(${promoBack});
  background-repeat: no-repeat;
`;
const PromoField = styled.div`
  width: 380px;
  height: 100%;
  grid-area: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 72px 48px;
  background-color: ${mainFill};
`;
const Text = styled.p`
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
`;

const Promo = () => {
  return (
    <Container>
      <PromoContextProvider>
        <PromoField>
          <Title>Введите ваш номер мобильного телефона</Title>
          <PhoneInput />
          <Text>
            и с Вами свяжется наш менеждер для дальнейшей консультации
          </Text>
          <NumField />
          <SubmitButton />
          {/* <Form /> */}
        </PromoField>
        <CloseButton />
        <QrImg />
      </PromoContextProvider>
    </Container>
  );
};
export default Promo;
