import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';

import env from '../../env.json';

import Text from '../Styled/Text';

const { errorColor, mainTextColor } = env.colors;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  color: ${props => (props.isError ? errorColor : mainTextColor)};
`;

const Message = styled.p`
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  text-transform: uppercase;
`;

const PromoMessage = () => {
  const {
    sendData: { error },
  } = useContext(PromoContext);

  const messageText = error ? 'ПРОИЗОШЛА ОШИБКА:' : 'ЗАЯВКА ПРИНЯТА';
  const additionalText = error
    ? `${error.message}. Попробуйте повторить позже.`
    : 'Держите телефон под рукой.Скоро с Вами свяжется наш менеджер.';

  return (
    <Wrapper isError={error}>
      <Message>{messageText}</Message>
      <Text>{additionalText}</Text>
    </Wrapper>
  );
};
export default PromoMessage;
