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

  const chekSymbol = sym => [' ', '-', ')'].includes(sym);

  const createNewValue = string => {
    let index = 1;
    let lastSymbol = string.at(-index);

    while (chekSymbol(lastSymbol)) {
      index++;
      lastSymbol = string.at(-index);
    }

    return string.slice(0, string.length - index);
  };

  const deleteSymbolFromInput = input => {
    const currentValue = input.value;

    if (!currentValue) return;

    const newValue = createNewValue(currentValue);
    input.value = newValue;
    generateInputEvent(newValue);
  };

  const addSymbolToInput = input => {
    !input.value && generateInputEvent();

    input.value += value;
    generateInputEvent(value.toString());
  };

  const handleNumButton = () => {
    const input = phone.current;
    if (typeof value === 'number') {
      addSymbolToInput(input);
    } else {
      deleteSymbolFromInput(input);
    }
    validate(input);
  };

  return (
    <Button
      styles={styles}
      area={area}
      tabIndex={tabs}
      data-tab={tabs}
      onClick={handleNumButton}>
      {value}
    </Button>
  );
};
export default NumFieldButton;
