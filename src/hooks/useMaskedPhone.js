import { useState } from 'react';
import maskPhone from '../helpers/maskPhone';

const useMaskedPhone = () => {
  const [maskedPhone, setMaskedPhone] = useState('');

  const setMaskedPhoneValue = value => setMaskedPhone(maskPhone(value));

  return { maskedPhone, setMaskedPhoneValue };
};
export default useMaskedPhone;
