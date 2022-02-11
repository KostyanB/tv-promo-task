import React, { createContext } from 'react';
import usePhoneValue from '../hooks/usePhoneValue';
import useValidateInputs from '../hooks/useValidateInputs';
import useSendData from '../hooks/useSendData';

export const PromoContext = createContext();

export const PromoContextProvider = props => {
  const phoneValue = usePhoneValue();
  const validateInputs = useValidateInputs();
  const sendData = useSendData();
  return (
    <PromoContext.Provider value={{ phoneValue, validateInputs, sendData }}>
      {props.children}
    </PromoContext.Provider>
  );
};
