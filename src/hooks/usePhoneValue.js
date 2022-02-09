import { useState } from 'react';

const usePhoneValue = () => {
  const [phoneValue, setPhoneValue] = useState('');

  return { phoneValue, setPhoneValue };
};
export default usePhoneValue;
