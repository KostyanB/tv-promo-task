import React, { useState } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Button from '../Styled/Buttons';

const Btn = styled(Button)`
  width: 100%;
`;

const SubmitButton = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);

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
