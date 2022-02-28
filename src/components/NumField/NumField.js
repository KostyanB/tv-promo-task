import React, { useMemo } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import NumFieldButton from './NumFieldButton';

const phoneMask = env.phoneMask;

const Field = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    'num1 num2 num3'
    'num4 num5 num6'
    'num7 num8 num9'
    'del del num0';
  padding-top: 20px;
  padding-bottom: 20px;
`;

const NumField = () => {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tabIndexes = ['12', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const prefix = useMemo(
    () => phoneMask.slice(0, phoneMask.indexOf('_')).replace('(', '').trim(),
    [],
  );

  return (
    <Field>
      {digits.map((item, i) => (
        <NumFieldButton
          key={i}
          value={item}
          area={`num${item}`}
          tabs={tabIndexes[i]}
          prefix={prefix}
        />
      ))}
      <NumFieldButton value="СТЕРЕТЬ" area="del" tabs="11" />
    </Field>
  );
};
export default NumField;
