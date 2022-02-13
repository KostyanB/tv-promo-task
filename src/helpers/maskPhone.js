const maskPhone = (elem, masked = '+7 (___) ___-__-__') => {
  // const elems = document.querySelectorAll(selector);
  const template = masked;

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

  const checkBlur = (value, event) =>
    event.type === 'blur' && value.length < 5 ? '' : value;

  const checkCurrentValue = (value, regExp, newValue, keyCode) => {
    const isValid =
      !regExp.test(value) ||
      value.length < 5 ||
      (keyCode && keyCode >= 0 && keyCode <= 9);
    // !regExp.test(value) || value.length < 5 || (keyCode > 47 && keyCode < 58);

    return isValid ? newValue : value;
  };

  const createNewValue = (value, index) => {
    const def = template.replace(/\D/g, '');
    const val = value.replace(/\D/g, '');

    return template.replace(/[_\d]/g, a =>
      index < val.length ? val.charAt(index++) || def.charAt(index) : a,
    );
  };

  const runMask = function (event) {
    const keyCode = Number(event.data);
    let index = 0;

    let newValue = createNewValue(elem.value, index);

    index = newValue.indexOf('_');

    if (index !== -1) newValue = newValue.slice(0, index);

    const regExp = createRegExp(elem.value);

    elem.value = checkCurrentValue(elem.value, regExp, newValue, keyCode);
    elem.value = checkBlur(elem.value, event);
  };

  // for (const elem of elems) {
  elem.addEventListener('input', runMask);
  elem.addEventListener('focus', runMask);
  elem.addEventListener('blur', runMask);
  // }
  document.addEventListener('addNum', runMask);
};
export default maskPhone;
