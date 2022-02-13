import React, { useContext } from 'react';
import env from '../../env.json';
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

const NumFieldButton = ({ value, area, phone, tabs }) => {
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
    });
    document.dispatchEvent(event);
  };

  const chekSym = sym => [' ', '-', ')'].includes(sym);

  const createNewValue = val => {
    let i = 1;
    let last = val.at(-i);

    while (chekSym(last)) {
      i++;
      last = val.at(-i);
    }

    return val.slice(0, val.length - i);
  };

  const delSymFromInput = input => {
    const currentValue = input.value;

    if (!currentValue) return;

    const newValue = createNewValue(currentValue);
    input.value = newValue;
    generateInputEvent(newValue);
  };

  const addSymToInput = input => {
    !input.value && generateInputEvent();

    input.value += value;
    generateInputEvent(value.toString());
  };

  const handleNumButton = () => {
    const input = phone.current;
    if (typeof value === 'number') {
      addSymToInput(input);
    } else {
      delSymFromInput(input);
    }
    validate(input);
  };

  return (
    <Button
      styles={styles}
      area={area}
      tabIndex={tabs}
      onClick={handleNumButton}>
      {value}
    </Button>
  );
};
export default NumFieldButton;
