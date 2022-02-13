import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import { PromoContext } from '../../context';
import Button from '../Styled/Buttons';

const { disBtnBack, disBtnBorder, disBtnText } = env.colors.disableBtnColors;

const Btn = styled(Button)`
  width: 100%;

  &.disable {
    background-color: ${disBtnBack};
    border: 1px solid ${disBtnBorder};
    color: ${disBtnText};
    cursor: default;

    &:hover,
    &:active {
      background-color: ${disBtnBack};
      border: 1px solid ${disBtnBorder};
      color: ${disBtnText};
    }
  }
`;

const SubmitButton = () => {
  const [disableSubmit, setDisableSubmit] = useState(false);
  const {
    validateInputs: { isValidInputs },
  } = useContext(PromoContext);

  useEffect(() => setDisableSubmit(!isValidInputs), [isValidInputs]);

  return (
    <Btn
      // disable={disableSubmit}
      className={disableSubmit ? 'disable' : ''}
      type="submit"
      form="promo-form"
      tabInbex="14"
      data-tab="14">
      ПОДТВЕРДИТЬ НОМЕР
    </Btn>
  );
};
export default SubmitButton;
