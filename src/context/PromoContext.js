import React, { createContext } from 'react';
import useValidateInputs from '../hooks/useValidateInputs';
import useSendData from '../hooks/useSendData';
import useMaskedPhone from '../hooks/useMaskedPhone';

export const PromoContext = createContext();

export const PromoContextProvider = props => {
  const validateInputs = useValidateInputs();
  const sendData = useSendData();
  const maskedPhone = useMaskedPhone();

  return (
    <PromoContext.Provider value={{ validateInputs, sendData, maskedPhone }}>
      {props.children}
    </PromoContext.Provider>
  );
};
