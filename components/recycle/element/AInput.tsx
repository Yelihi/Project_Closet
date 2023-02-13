import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Input } from 'antd';

import { TControl } from './type';

function AInput<T extends FieldValues>({ name, rules, control, ...props }: TControl<T>) {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Input value={value} id={name} onChange={onChange} {...props} style={{ height: '30px' }} />
      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default AInput;
