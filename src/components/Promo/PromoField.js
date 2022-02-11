import React, { createRef, useRef, useContext } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';

import PhoneInput from './PhoneInput';
import NumField from '../NumField';
import PromoCheck from './PromoCheck';
import SubmitButton from './SubmitButton';

const Text = styled.p`
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
`;

const PromoField = () => {
  const phoneRef = createRef();
  const formRef = useRef(null);
  const {
    sendData: { sendData },
    validateInputs: { isValidInputs },
  } = useContext(PromoContext);

  const sendForm = e => {
    e.preventDefault();
    if (isValidInputs) {
      const data = new FormData(formRef.current);
      sendData(data);
    }
  };

  return (
    <>
      <form id="promo-form" ref={formRef} onSubmit={sendForm}>
        <PhoneInput ref={phoneRef} />
      </form>
      <Text>и с Вами свяжется наш менеждер для дальнейшей консультации</Text>
      <NumField phone={phoneRef} />
      <PromoCheck />
      <SubmitButton />
    </>
  );
};
export default PromoField;
