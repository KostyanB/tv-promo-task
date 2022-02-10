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

  const delSymFromInput = input => {
    if (!input.value) return;

    const newValue = input.value.slice(0, input.value.length - 1);

    input.value = newValue;
    generateInputEvent(newValue);
    validate(input);
  };

  const addSymToInput = input => {
    !input.value && generateInputEvent();

    input.value += value;
    generateInputEvent(value.toString());
    validate(input);
  };

  const handleNumButton = () => {
    const input = phone.current;
    if (typeof value === 'number') {
      addSymToInput(input);
    } else {
      delSymFromInput(input);
    }
  };

  return (
    <Button styles={styles} area={area} onClick={handleNumButton}>
      {value}
    </Button>
  );
};
export default NumFieldButton;
