import React from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import NumFieldButton from './NumFieldButton';

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

const NumField = ({ phone }) => {
  const digArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Field>
      {digArr.map(item => (
        <NumFieldButton
          key={item}
          value={item}
          area={`num${item}`}
          phone={phone}
        />
      ))}
      <NumFieldButton value="СТЕРЕТЬ" area="del" phone={phone} />
    </Field>
  );
};
export default NumField;
