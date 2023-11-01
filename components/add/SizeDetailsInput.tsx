import React from 'react';
import styled from 'styled-components';
import { FieldValues, useController } from 'react-hook-form';
import { SpecificationElementProps } from './data/InputDataInAdd';

import InputBackground from '../recycle/inputElements/InputBackgroud';
import useControlAntdElements from '../../hooks/useControlAntdElements';
import { TControl } from '../recycle/types/recycleElementsTypes';
import { LibsElementsProps } from '../../hooks/types/libsElementsProps';

type SizeDetailsInputProps<T extends FieldValues, K extends keyof LibsElementsProps> = SpecificationElementProps<K> &
  TControl<T> & { textArea?: boolean };

const SizeDetailsInput = <T extends FieldValues, K extends keyof LibsElementsProps>(
  props: SizeDetailsInputProps<T, K>
) => {
  const { elementType, subTitle, control, name, errorMessage, elementProps, rules, textArea } = props;
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });

  const view = useControlAntdElements({ elementType, name, value, onChange, elementProps });

  return (
    <InputBackground title={name.split('.')[1]} subTitle={subTitle} textArea={textArea}>
      {view}
      <ErrorMessage>{error && errorMessage}</ErrorMessage>
    </InputBackground>
  );
};

export default SizeDetailsInput;

const ErrorMessage = styled.span`
  display: inline-block;
  width: 100%;
  height: 14px;
  font-size: 11px;
  margin-top: 0.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-family: ${({ theme }) => theme.font.Kfont};
  color: ${({ theme }) => theme.colors.red};
`;
