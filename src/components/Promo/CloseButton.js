import React, { useContext } from 'react';
import styled from 'styled-components';
import { PromoContext } from '../../context';
import env from '../../env.json';
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
  background-color: ${props => (props.success ? closeBtnBorder : closeBtnBack)};
  border: 2px solid ${closeBtnBorder};
  color: ${props => (props.success ? closeBtnBack : closeBtnText)};

  &:focus,
  &:hover,
  &:active {
    background-color: ${props =>
      props.success ? closeBtnBorder : closeBtnHoverBack};
    border: 1px solid ${closeBtnHoverBorder};
  }
  &:focus,
  &:hover {
    color: ${closeBtnHoverText};
  }
  &:active {
    color: ${props => (props.success ? closeBtnBack : closeBtnActiveText)};
  }
`;

const CloseButton = () => {
  const {
    sendData: { status },
  } = useContext(PromoContext);

  return (
    <Close
      to="/"
      tabIndex="15"
      data-tab="15"
      success={status === 'success' ? 'true' : undefined}>
      <CrossIcon />
    </Close>
  );
};
export default CloseButton;
