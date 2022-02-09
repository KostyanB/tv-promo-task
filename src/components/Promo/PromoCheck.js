import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';
import env from '../../env.json';

const { subTextColor } = env.colors;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 52px;

  & > span {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${subTextColor};
  }
`;

const PromoCheck = () => {
  return (
    <>
      <Label htmlFor="promo-check">
        <input type="checkbox" form="promo-form" name="promo-check" />
        <span>Согласие на обработку персональных данных</span>
      </Label>
    </>
  );
};
export default PromoCheck;
