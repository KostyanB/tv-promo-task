import React, { useEffect, useContext, forwardRef } from 'react';
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

const PhoneInput = forwardRef((props, ref) => {
  const phoneMask = env.phoneMask;
  const {
    validateInputs: { validate, isValidPhone },
  } = useContext(PromoContext);

  useEffect(() => maskPhone(ref.current, phoneMask), [ref, phoneMask]);

  const handleValidatePhone = () => validate(ref.current);

  return (
    <Input
      ref={ref}
      type="tel"
      name="promo-phone"
      holder={phoneMask}
      tabIndex="1"
      data-tab="1"
      onChange={handleValidatePhone}
      onBlur={handleValidatePhone}
      onInput={handleValidatePhone}
      className={!isValidPhone && 'novalid'}>
      {props.children}
    </Input>
  );
});

export default PhoneInput;
