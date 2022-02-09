import React from 'react';
import styled from 'styled-components';
import qrImg from '../../img/promo_qr.png';

const Img = styled.img`
  grid-area: 1/-1;
  place-self: end end;
  margin-bottom: 40px;
  margin-right: 40px;
  width: 314px;
  height: 110px;
`;

const QrImg = () => <Img src={qrImg} alt="QR code" />;
export default QrImg;
