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

  cursor: default !important;

  & > input {
    width: 40px;
    height: 40px;
    z-index: -5;

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
  border-style: solid;
  border-color: ${mainTextColor};
  border-width: ${props => (props.isFocused ? '4px' : '2px')};
  color: ${mainTextColor};
  cursor: pointer;

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
  const [isFocused, setIsFocused] = useState(false);

  const toggleCheck = () => {
    const newCheck = !checkRef.current.checked;
    setIsChecked(newCheck);
    checkRef.current.checked = newCheck;
  };

  const handleSetCheckByEnter = e => e.key === 'Enter' && toggleCheck();

  const handleCheckWhenFocus = () => {
    setIsFocused(true);
    document.addEventListener('keyup', handleSetCheckByEnter);
  };

  const handleCheckWhenBlur = () => {
    setIsFocused(false);
    document.removeEventListener('keyup', handleSetCheckByEnter);
  };

  useEffect(() => validate(checkRef.current), [validate, checkRef]);

  return (
    <Label htmlFor="promo-check">
      <input
        ref={checkRef}
        type="checkbox"
        form="promo-form"
        name="promo-check"
        tabIndex="13"
        onFocus={handleCheckWhenFocus}
        onBlur={handleCheckWhenBlur}
      />
      <Agree>
        <CheckField
          isChecked={isChecked}
          isFocused={isFocused}
          onClick={toggleCheck}>
          <CheckIcon name="Согласен" />
        </CheckField>
        <span>Согласие на обработку персональных данных</span>
      </Agree>
    </Label>
  );
};
export default PromoCheck;
