import React, { useState } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Button from '../Styled/Buttons';

const Btn = styled(Button)`
  width: 100%;
`;

const SubmitButton = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <Btn disable={disableSubmit} onClick={handleSubmit}>
      ПОДТВЕРДИТЬ НОМЕР
    </Btn>
  );
};
export default SubmitButton;
