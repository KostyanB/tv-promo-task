import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import Button from '../Styled/Buttons';
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

const Btn = styled(Button)`
  width: 88px;
  grid-area: 1/-1;
  place-self: start end;
  margin-top: 20px;
  margin-right: 20px;
`;

const CloseButton = () => {
  const styles = {
    btnBack: closeBtnBack,
    btnBorder: closeBtnBorder,
    btnText: closeBtnText,
    btnHoverBack: closeBtnHoverBack,
    btnHoverBorder: closeBtnHoverBorder,
    btnHoverText: closeBtnHoverText,
    btnActiveText: closeBtnActiveText,
  };

  const handleClosePromo = () => {
    console.log('close');
  };

  return (
    <Btn styles={styles} onClick={handleClosePromo}>
      <CrossIcon />
    </Btn>
  );
};
export default CloseButton;
