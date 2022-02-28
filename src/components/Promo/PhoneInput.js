import React, { useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';
import env from '../../env.json';

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
    validateInputs: { validate, isValidPhone },
    maskedPhone: { maskedPhone, setMaskedPhoneValue },
  } = useContext(PromoContext);
  const inputRef = useRef(null);

  useEffect(() => validate(inputRef.current), [inputRef, validate]);

  const checkBlur = value => (value.length < 5 ? '' : value);

  const handleMaskedPhone = e => {
    const newValue =
      e.type === 'blur'
        ? checkBlur(inputRef.current.value)
        : inputRef.current.value;

    setMaskedPhoneValue(newValue);
  };

  return (
    <Input
      ref={inputRef}
      type="tel"
      name="promo-phone"
      holder={phoneMask}
      tabIndex="1"
      data-tab="1"
      onChange={handleMaskedPhone}
      onBlur={handleMaskedPhone}
      onInput={handleMaskedPhone}
      onFocus={handleMaskedPhone}
      className={!isValidPhone && 'novalid'}
      value={maskedPhone}
    />
  );
};

export default PhoneInput;
