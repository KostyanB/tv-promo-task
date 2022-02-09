import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { PromoContext } from '../../context';
import Button from '../Styled/Buttons';

const Btn = styled(Button)`
  width: 100%;
`;

const SubmitButton = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const {
    validateInputs: { isValidInputs },
  } = useContext(PromoContext);

  useEffect(() => setDisableSubmit(!isValidInputs), [isValidInputs]);

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Btn
      disable={disableSubmit}
      type="submit"
      form="promo-form"
      onClick={handleSubmit}>
      ПОДТВЕРДИТЬ НОМЕР
    </Btn>
  );
};
export default SubmitButton;