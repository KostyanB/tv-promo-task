import React, { createContext } from 'react';
import useStartPlayTime from '../hooks/useStartPlayTime';

export const Context = createContext();

export const ContextProvider = props => {
  const startPlayTime = useStartPlayTime();

  return (
    <Context.Provider value={{ startPlayTime }}>
      {props.children}
    </Context.Provider>
  );
};
