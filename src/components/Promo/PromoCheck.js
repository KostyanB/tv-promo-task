import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';
import env from '../../env.json';

import { CheckIcon } from '../Icons';

const {
  transitionDuration,
  colors: { subTextColor, mainTextColor },
} = env;

const Label = styled.label`
  position: relative;
  display: grid;
  align-items: center;
  padding: 6px 10px;
  height: 52px;

  & > input {
    width: 40px;
    height: 40px;
    z-index: -1;
    cursor: pointer;
    grid-area: 1/-1;
    place-self: start;
  }
`;
const Agree = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  grid-area: 1/-1;
  place-self: start;

  & > span {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${subTextColor};
  }
`;
const CheckField = styled.div`
  width: 55px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  background-color: transparent;
  border: 2px solid;
  border-color: ${mainTextColor};
  color: ${mainTextColor};

  & > svg {
    transform: ${props => (props.isChecked ? 'scale(1)' : 'scale(0)')};
    transition: transform ${transitionDuration};
  }
`;

const PromoCheck = () => {
  const checkRef = useRef(null);
  const {
    validateInputs: { validate },
  } = useContext(PromoContext);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked(!isChecked);

  useEffect(() => {
    checkRef.current.checked = isChecked;
    validate(checkRef.current);
  }, [isChecked, validate]);

  return (
    <Label htmlFor="promo-check" onClick={toggleCheck}>
      <input
        ref={checkRef}
        type="checkbox"
        form="promo-form"
        name="promo-check"
      />
      <Agree>
        <CheckField isChecked={isChecked}>
          <CheckIcon name="Согласен" />
        </CheckField>
        <span>Согласие на обработку персональных данных</span>
      </Agree>
    </Label>
  );
};
export default PromoCheck;
