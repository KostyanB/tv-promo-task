import React, { createContext } from 'react';
import useValidateInputs from '../hooks/useValidateInputs';
import useSendData from '../hooks/useSendData';

export const PromoContext = createContext();

export const PromoContextProvider = props => {
  const validateInputs = useValidateInputs();
  const sendData = useSendData();
  return (
    <PromoContext.Provider value={{ validateInputs, sendData }}>
      {props.children}
    </PromoContext.Provider>
  );
};
