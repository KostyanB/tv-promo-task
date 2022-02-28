import { useState } from 'react';
import env from '../env.json';

const useValidateInputs = () => {
  const phoneMask = env.phoneMask;
  const [isValidInputs, setIsValidInputs] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidCheck, setIsValidCheck] = useState(false);

  const checkAllInputs = () => {
    if (isValidPhone && isValidCheck) {
      setIsValidInputs(true);
    } else {
      setIsValidInputs(false);
    }
  };

  const getPrefix = str => str.split('(')[0].trim();

  const validateCheck = checkbox => {
    setIsValidCheck(checkbox.checked);
    checkAllInputs();
  };

  const validatePhone = value => {
    const maskPrefix = getPrefix(phoneMask);
    console.log('maskPrefix: ', maskPrefix);
    const inputPrefix = getPrefix(value);
    console.log('inputPrefix: ', inputPrefix);

    let num = value;
    const arr = [maskPrefix, ' ', '(', ')', '-'];
    arr.map(sym => (num = num.replaceAll(sym, '')));

    const phoneIsValid = maskPrefix === inputPrefix && num.length === 10;
    setIsValidPhone(phoneIsValid);
    checkAllInputs();
  };

  const validate = input => {
    const inputType = input.type,
      inputValue = input.value;

    if (inputType === 'checkbox') validateCheck(input);
    if (inputType === 'tel') validatePhone(inputValue);
  };

  return {
    isValidInputs,
    isValidPhone,
    isValidCheck,
    validate,
  };
};
export default useValidateInputs;
