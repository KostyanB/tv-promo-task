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

const NumFieldButton = ({ value, area, tabs, prefix }) => {
  const {
    maskedPhone: { maskedPhone, setMaskedPhoneValue },
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

  const deleteSymbolFromInput = () => {
    if (!maskedPhone) return;

    const newValue = createNewValue(maskedPhone);
    setMaskedPhoneValue(newValue);
  };

  const addSymbolToInput = () => {
    const newValue = maskedPhone ? maskedPhone + value : prefix + value;
    setMaskedPhoneValue(newValue);
  };

  const handleNumButton = () => {
    if (typeof value === 'number') {
      addSymbolToInput();
    } else {
      deleteSymbolFromInput();
    }
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
