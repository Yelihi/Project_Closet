import React from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { DatePicker, DatePickerProps } from 'antd';

import { TControl } from './type';

function ADatepicker<T extends FieldValues>({ name, rules, control, ...props }: TControl<T>) {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });
  return (
    <>
      <label>{name}</label>
      <DatePicker onChange={(value, dateString) => onChange(dateString)} picker='month' style={{ width: '100%', height: '30px' }} />
      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default ADatepicker;
