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
  disableBtnColors: { disBtnBack, disBtnBorder, disBtnText },
} = env.colors;

const Button = styled.button.attrs(props => ({
  disabled: props.disable,
  type: props.type,
  form: props.form,
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  background-color: ${props => props?.styles?.btnBack || mainBtnBack};
  border: 2px solid ${props => props?.styles?.btnBorder || mainBtnBorder};
  font-weight: 500;
  color: ${props => props?.styles?.btnText || mainBtnText};
  grid-area: ${props => (props.area ? props.area : '')};
  &:focus,
  &:hover,
  &:active {
    background-color: ${props =>
      props?.styles?.btnHoverBack || mainBtnHoverBack};
    border: 1px solid
      ${props => props?.styles?.btnHoverBorder || mainBtnHoverBorder};
  }
  &:focus,
  &:hover {
    color: ${props => props?.styles?.btnHoverText || mainBtnHoverText};
  }
  &:active {
    color: ${props => props?.styles?.btnActiveText || mainBtnActiveText};
  }

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
export default Button;
