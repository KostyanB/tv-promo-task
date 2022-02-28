import React, { useRef, useContext } from 'react';
import { PromoContext } from '../../context';

import PhoneInput from './PhoneInput';
import NumField from '../NumField';
import PromoCheck from './PromoCheck';
import SubmitButton from './SubmitButton';
import Text from '../Styled/Text';

const PromoDataField = () => {
  const formRef = useRef(null);
  const {
    sendData: { sendData },
    validateInputs: { isValidInputs },
  } = useContext(PromoContext);

  const sendForm = e => {
    e.preventDefault();
    if (isValidInputs) {
      const form = formRef.current;
      const data = new FormData(form);
      sendData(data);
      form.reset();
    }
  };

  return (
    <>
      <form id="promo-form" ref={formRef} onSubmit={sendForm}>
        <PhoneInput />
      </form>
      <Text>и с Вами свяжется наш менеждер для дальнейшей консультации</Text>
      <NumField />
      <PromoCheck />
      <SubmitButton />
    </>
  );
};
export default PromoDataField;
