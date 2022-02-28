import env from '../env.json';

const maskPhone = inputValue => {
  const template = env.phoneMask || '+7 (___) ___-__-__';

  const createRegExp = value => {
    const length = value.length;
    const regExp = template
      .substring(0, length)
      .replace(/_+/g, a => {
        return '\\d{1,' + a.length + '}';
      })
      .replace(/[+()]/g, '\\$&');

    return new RegExp('^' + regExp + '$');
  };

  const checkCurrentValue = (value, regExp, newValue) => {
    const isValid = !regExp.test(value) || value.length < 5;

    return isValid ? newValue : value;
  };

  const createNewValue = (value, index) => {
    const def = template.replace(/\D/g, '');
    const val = value.replace(/\D/g, '');

    return template.replace(/[_\d]/g, a =>
      index < val.length ? val.charAt(index++) || def.charAt(index) : a,
    );
  };

  const runMask = value => {
    let index = 0;

    let newValue = createNewValue(value, index);

    index = newValue.indexOf('_');

    if (index !== -1) newValue = newValue.slice(0, index);

    const regExp = createRegExp(value);

    value = checkCurrentValue(value, regExp, newValue);

    return value;
  };

  return runMask(inputValue);
};
export default maskPhone;
