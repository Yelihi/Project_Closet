import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Input } from 'antd';

import { TControl } from './type';

const { TextArea } = Input;

function ADescription<T extends FieldValues>({ control, name, rules, ...props }: TControl<T>) {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({
    control,
    name,
    rules,
  });
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <TextArea value={value} id={name} onChange={onChange} placeholder='설명을 적어주세요' rows={5} {...props} style={{ width: '100%' }} />
      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default ADescription;
