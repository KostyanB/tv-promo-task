import { useState } from 'react';
import env from '../env.json';
import getPrefix from '../helpers/getPrefix';

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

  const validateCheck = checkbox => {
    setIsValidCheck(checkbox.checked);
    checkAllInputs();
  };

  const validatePhone = value => {
    const maskPrefix = getPrefix(phoneMask);

    let num = value;
    const arr = [' ', '(', ')', '-'];
    arr.map(sym => (num = num.replaceAll(sym, '')));

    const inputPrefix = num.slice(0, -10);

    const phoneIsValid =
      maskPrefix === inputPrefix && num.replace(maskPrefix, '').length === 10;

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
