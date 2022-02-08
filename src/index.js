import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import { ContextProvider } from './context';

render(
  <React.StrictMode>
    {/* <ContextProvider> */}
    <App />
    {/* </ContextProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
