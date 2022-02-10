import React, { useState, useContext, useEffect, useRef, useMemo } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import maskPhone from '../../helpers/maskPhone';
import { PromoContext } from '../../context';
import Button from '../Styled/Buttons';

const {
  numBtnBack,
  numBtnBorder,
  numBtnText,
  numBtnHoverBack,
  numBtnHoverBorder,
  numBtnHoverText,
  numBtnActiveText,
} = env.colors.numBtnColors;

const NumFieldButton = ({ value, area, phone }) => {
  const {
    validateInputs: { validate },
  } = useContext(PromoContext);
  const styles = {
    btnBack: numBtnBack,
    btnBorder: numBtnBorder,
    btnText: numBtnText,
    btnHoverBack: numBtnHoverBack,
    btnHoverBorder: numBtnHoverBorder,
    btnHoverText: numBtnHoverText,
    btnActiveText: numBtnActiveText,
  };

  const generateInputEvent = (dataValue = '') => {
    const event = new InputEvent('addNum', {
      data: dataValue,
      // inputType: 'insertText',
    });
    document.dispatchEvent(event);
  };

  const delSymFromInput = () => {};

  const addSymToInput = () => {
    !phone.current.value && generateInputEvent();

    phone.current.value += value;
    generateInputEvent(value.toString());
    validate(phone.current);
  };

  const handleNumButton = () => {
    if (typeof value === 'number') {
      addSymToInput();
    } else {
      delSymFromInput();
    }
  };

  return (
    <Button styles={styles} area={area} onClick={handleNumButton}>
      {value}
    </Button>
  );
};
export default NumFieldButton;
