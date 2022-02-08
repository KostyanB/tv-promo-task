import styled from 'styled-components';
import env from '../../env.json';

/**
 * buttons can take style as props
 * styles={{
 *    btnBack: 'color value',
 *    btnBorder: 'color value',
 *    btnText: 'color value',
 *    btnHoverBack: 'color value',
 *    btnHoverBorder: 'color value',
 *    btnHoverText: 'color value',
 *    btnActiveText: 'color value',
 * }}
 */

const {
  mainBtnColors: {
    mainBtnBack,
    mainBtnBorder,
    mainBtnText,
    mainBtnHoverBack,
    mainBtnHoverBorder,
    mainBtnHoverText,
    mainBtnActiveText,
  },
  numBtnColors: {
    numBtnBack,
    numBtnBorder,
    numBtnText,
    numBtnHoverBack,
    numBtnHoverBorder,
    numBtnHoverText,
    numBtnActiveText,
  },
  disableBtnColors: { disBtnBack, disBtnBorder, disBtnText },
  closeBtnColors: {
    closeBtnBack,
    closeBtnBorder,
    closeBtnText,
    closeBtnHoverBack,
    closeBtnHoverBorder,
    closeBtnHoverText,
    closeBtnActiveText,
  },
} = env.colors;

const Button = styled.button.attrs(props => ({
  disabled: props.disable,
  type: props.type,
  form: props.form,
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  /* padding: 8px 20px;
  font-weight: bold;
  font-size: 18px;
  line-height: 32px; */

  &:disabled {
    background-color: ${disBtnBack};
    border: 1px solid ${disBtnBorder};
    color: ${disBtnText};
    &:hover,
    &:active {
      background-color: ${disBtnBack};
      border: 1px solid ${disBtnBorder};
      color: ${disBtnText};
    }
  }
`;

export const MainButton = styled(Button)`
  background-color: ${props => props?.styles?.btnBack || mainBtnBack};
  border: 1px solid ${props => props?.styles?.btnBorder || mainBtnBorder};
  color: ${props => props?.styles?.btnText || mainBtnText};

  &:hover,
  &:active {
    background-color: ${props =>
      props?.styles?.btnHoverBack || mainBtnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || mainBtnHoverBorder};
  }

  &:hover {
    color: ${props => props?.styles?.btnHoverText || mainBtnHoverText};
  }
  &:active {
    color: ${props => props?.styles?.btnActiveText || mainBtnActiveText};
  }
`;

export const NumButton = styled(Button)`
  background-color: ${props => props?.styles?.btnBack || numBtnBack};
  border: 1px solid ${props => props?.styles?.btnBorder || numBtnBorder};
  color: ${props => props?.styles?.btnText || numBtnText};

  &:hover,
  &:active {
    background-color: ${props =>
      props?.styles?.btnHoverBack || numBtnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || numBtnHoverBorder};
  }

  &:hover {
    color: ${props => props?.styles?.btnHoverText || numBtnHoverText};
  }
  &:active {
    color: ${props => props?.styles?.btnActiveText || numBtnActiveText};
  }
`;

export const CloseButton = styled(Button)`
  background-color: ${props => props?.styles?.btnBack || closeBtnBack};
  border: 1px solid ${props => props?.styles?.btnBorder || closeBtnBorder};
  color: ${props => props?.styles?.btnText || closeBtnText};

  &:hover,
  &:active {
    background-color: ${props =>
      props?.styles?.btnHoverBack || closeBtnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || closeBtnHoverBorder};
  }

  &:hover {
    color: ${props => props?.styles?.btnHoverText || closeBtnHoverText};
  }
  &:active {
    color: ${props => props?.styles?.btnActiveText || closeBtnActiveText};
  }
`;
