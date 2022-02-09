import React, { createContext } from 'react';
import usePhoneValue from '../hooks/usePhoneValue';
import useValidateInputs from '../hooks/useValidateInputs';

export const PromoContext = createContext();

export const PromoContextProvider = props => {
  const phoneValue = usePhoneValue();
  const validateInputs = useValidateInputs();
  return (
    <PromoContext.Provider value={{ phoneValue, validateInputs }}>
      {props.children}
    </PromoContext.Provider>
  );
};
