import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import maskPhone from '../../helpers/maskPhone';

const { mainTextColor } = env.colors;

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
  &.valid {
  }
  &.novalid {
  }
`;

const PhoneInput = () => {
  const phoneMask = env.phoneMask;
  const inputRef = useRef(null);
  useEffect(() => {
    maskPhone(inputRef.current, phoneMask);
  }, []);

  const handleValidate = () => {};

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
        // className={isValid ? 'valid' : 'novalid'}
      />
    </form>
  );
};
export default PhoneInput;
