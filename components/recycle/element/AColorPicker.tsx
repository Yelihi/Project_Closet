import React from 'react';
import { CirclePicker } from 'react-color';
import { FieldValues, useController } from 'react-hook-form';
import { Input } from 'antd';

import { TControl } from './type';

const colors = ['#f44336', '#e91e63', '#673ab7', '#3f51b5', '#03a9f4', '#4caf50', '#ffc107', '#ff9800', '#ff5722', '#795548'];

function AColorPicker<T extends FieldValues>({ name, rules, control, ...props }: TControl<T>) {
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });
  return (
    <>
      <label htmlFor={name}>{`${name}: ${value}`}</label>
      <CirclePicker color={value} colors={colors} onChange={(color, event) => onChange(color.hex)} {...props} circleSize={25} width='100%' />
      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default AColorPicker;
