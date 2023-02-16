import React from 'react';
import styled from 'styled-components';
import { FieldValues, useController } from 'react-hook-form';
import { Input } from 'antd';

import { media } from '../../../styles/media';

import { TControl } from './type';

function AInput<T extends FieldValues>({ name, rules, control, subTitle, ...props }: TControl<T>) {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });
  return (
    <>
      <Container>
        <div>
          <Title>{name}</Title>
          <SubTitme>{subTitle}</SubTitme>
        </div>
        <div>
          <Input value={value} id={name} onChange={onChange} {...props} style={{ height: '30px' }} />
          {/* {error && <span>에러</span>} */}
        </div>
      </Container>
    </>
  );
}

export default AInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  width: 100%;
  height: auto;

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-size: 15px;
  margin-bottom: 5px;
`;

const SubTitme = styled.p`
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 10px;
`;
