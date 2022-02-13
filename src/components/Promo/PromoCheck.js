import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
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
    grid-area: 1/-1;
    place-self: start;
    width: 40px;
    height: 40px;
    z-index: -5;
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

  const toggleCheck = useCallback(() => {
    const newCheck = !checkRef.current.checked;
    setIsChecked(newCheck);
    checkRef.current.checked = newCheck;
    validate(checkRef.current);
  }, [checkRef, validate]);

  const handleCheckWhenFocus = () => setIsFocused(true);

  const handleCheckWhenBlur = () => setIsFocused(false);

  useEffect(() => {
    const setCheckByEnter = e => {
      if (e.key === 'Enter') toggleCheck();
    };

    if (isFocused) {
      document.addEventListener('keyup', setCheckByEnter);
    } else {
      document.removeEventListener('keyup', setCheckByEnter);
    }

    validate(checkRef.current);

    return () => document.removeEventListener('keyup', setCheckByEnter);
  }, [isFocused, toggleCheck, validate, checkRef]);

  return (
    <Label htmlFor="promo-check">
      <input
        ref={checkRef}
        type="checkbox"
        form="promo-form"
        name="promo-check"
      />
      <Agree>
        <CheckField
          isChecked={isChecked}
          isFocused={isFocused}
          onClick={toggleCheck}
          onFocus={handleCheckWhenFocus}
          onBlur={handleCheckWhenBlur}
          tabIndex="13"
          data-tab="13">
          <CheckIcon name="Согласен" />
        </CheckField>
        <span>Согласие на обработку персональных данных</span>
      </Agree>
    </Label>
  );
};
export default PromoCheck;
