import React, { useState } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
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

// const NumBtn = styled(NumFieldButton)`
//   /* grid-area: ${props => (props.area ? props.area : '')}; */
//   /* width: 88px; */
//   width: 100%;
// `;

const NumFieldButton = ({ value, area }) => {
  // const area = `num${value}`;
  const styles = {
    btnBack: numBtnBack,
    btnBorder: numBtnBorder,
    btnText: numBtnText,
    btnHoverBack: numBtnHoverBack,
    btnHoverBorder: numBtnHoverBorder,
    btnHoverText: numBtnHoverText,
    btnActiveText: numBtnActiveText,
  };
  const addSymToInput = () => {};

  const delSymFromInput = () => {};

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
