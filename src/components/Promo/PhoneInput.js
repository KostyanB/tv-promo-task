import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';
import env from '../../env.json';
import maskPhone from '../../helpers/maskPhone';

const { mainTextColor, errorColor } = env.colors;

const Input = styled.input.attrs(props => ({
  placeholder: props.holder,
  type: props.type,
  name: props.name,
  form: props.form,
}))`
  width: 100%;
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  text-transform: uppercase;
  text-align: center;

  &::placeholder {
    color: ${mainTextColor};
  }

  &.novalid {
    color: ${errorColor};
  }
`;

const PhoneInput = () => {
  const phoneMask = env.phoneMask;
  const {
    phoneValue: { phoneValue, setPhoneValue },
    validateInputs: { validate, isValidPhone },
  } = useContext(PromoContext);
  const inputRef = useRef(null);

  useEffect(() => {
    maskPhone(inputRef.current, phoneMask);
  }, []);

  const handleValidate = () => {
    setPhoneValue(inputRef.current.value);
    validate(inputRef.current);
  };

  return (
    <form id="promo-form">
      <Input
        ref={inputRef}
        type="tel"
        name="promo-phone"
        holder={phoneMask}
        onChange={handleValidate}
        onBlur={handleValidate}
        onInput={handleValidate}
        value={phoneValue}
        className={!isValidPhone && 'novalid'}
      />
    </form>
  );
};
export default PhoneInput;
