import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { CirclePicker } from 'react-color';
import { FieldValues, useController } from 'react-hook-form';
import { InputNumber, Select, Input, DatePicker } from 'antd';

import { TControl } from './type';
import { media } from '../../../styles/media';
import { colors } from '../../add/ElementData';

const { TextArea } = Input;

export interface ISelectItem {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export type CustomSelectProps<T> = {
  options?: ISelectItem[];
  defaultValue?: string;
  placeholder?: string;
};

export type TPorps<T extends FieldValues> = CustomSelectProps<T> & TControl<T>;

function AInputElement<T extends FieldValues>(props: TPorps<T>) {
  const { name, rules, control, subTitle, errorMessage, options, defaultValue, placeholder } = props;
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
        <InputContainer>
          {name == 'productName' ? <Input value={value} id={name} onChange={onChange} {...props} style={{ height: '30px' }} /> : null}
          {name == 'color' ? <CirclePicker color={value} colors={colors} onChange={(color, event) => onChange(color.hex)} {...props} circleSize={25} width='100%' /> : null}
          {name == 'price' ? <InputNumber value={value} id={name} min={1} onChange={onChange} style={{ height: '30px', width: '100%' }} placeholder={placeholder} /> : null}
          {name == 'purchaseDay' ? <DatePicker onChange={(value, dateString) => onChange(dateString)} picker='month' style={{ width: '100%', height: '30px' }} /> : null}
          {name == 'description' ? <TextArea value={value} id={name} onChange={onChange} placeholder={placeholder} rows={5} style={{ width: '100%' }} /> : null}
          {name == 'categori' ? <Select defaultValue={defaultValue} id={name} options={options} onChange={onChange} style={{ height: '30px', width: '100%' }} /> : null}
          {error && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </InputContainer>
      </Container>
    </>
  );
}

export default AInputElement;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5px;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.mainGrey};
  border: 1px solid ${({ theme }) => theme.colors.hoverGrey};

  > div {
  }

  ${media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Regular};
  font-size: 15px;
  margin-bottom: 5px;
`;

const SubTitme = styled.p`
  display: flex;
  height: 50px;
  max-width: 450px;
  font-family: ${({ theme }) => theme.font.Kfont};
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.middleGrey};
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  max-width: 150px;
`;

const ErrorMessage = styled.span`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeight.Light};
  color: ${({ theme }) => theme.colors.red};
`;
