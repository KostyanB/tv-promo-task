import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
// import Button from '../Styled/Buttons';
import { Link } from 'react-router-dom';
import { CrossIcon } from '../Icons';

const {
  closeBtnBack,
  closeBtnBorder,
  closeBtnText,
  closeBtnHoverBack,
  closeBtnHoverBorder,
  closeBtnHoverText,
  closeBtnActiveText,
} = env.colors.closeBtnColors;

const Close = styled(Link)`
  grid-area: 1/-1;
  place-self: start end;
  margin-top: 20px;
  margin-right: 20px;
  width: 88px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${closeBtnBack};
  border: 2px solid ${closeBtnBorder};
  color: ${closeBtnText};

  &:hover,
  &:active {
    background-color: ${closeBtnHoverBack};
    border: 1px solid ${closeBtnHoverBorder};
  }

  &:hover {
    color: ${closeBtnHoverText};
  }
  &:active {
    color: ${closeBtnActiveText};
  }
`;

// const Btn = styled(Button)`
//   width: 88px;
//   grid-area: 1/-1;
//   place-self: start end;
//   margin-top: 20px;
//   margin-right: 20px;
// `;

const CloseButton = () => {
  // const styles = {
  //   btnBack: closeBtnBack,
  //   btnBorder: closeBtnBorder,
  //   btnText: closeBtnText,
  //   btnHoverBack: closeBtnHoverBack,
  //   btnHoverBorder: closeBtnHoverBorder,
  //   btnHoverText: closeBtnHoverText,
  //   btnActiveText: closeBtnActiveText,
  // };

  // const handleClosePromo = () => {
  //   console.log('close');
  // };

  return (
    // <Btn styles={styles} onClick={handleClosePromo}>
    //   <CrossIcon />
    // </Btn>
    <Close to="/">
      <CrossIcon />
    </Close>
  );
};
export default CloseButton;
