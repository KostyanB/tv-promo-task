import React, { useContext } from 'react';
import { PromoContext } from '../../context';

import Title from '../Styled/Title';
import PromoDataField from './PromoDataField';
import PromoMessage from './PromoMessage';
import Preloader from '../Styled/Preloader';

const PromoField = () => {
  const {
    sendData: { status },
  } = useContext(PromoContext);

  return (
    <>
      {status === 'sending' && <Preloader />}
      {(status === 'success' || status === 'rejected') && <PromoMessage />}
      {!status && (
        <>
          <Title>Введите ваш номер мобильного телефона</Title>
          <PromoDataField />
        </>
      )}
    </>
  );
};
export default PromoField;
