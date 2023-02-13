import React, { ReactNode } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Select } from 'antd';

import { TControl } from './type';

export interface ISelectItem {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export type CustomSelectProps<T> = {
  options: ISelectItem[];
  defaultValue: string;
};

export type TPorps<T extends FieldValues> = CustomSelectProps<T> & TControl<T>;

function ASelectInput<T extends FieldValues>(props: TPorps<T>) {
  const { name, rules, control, options, defaultValue } = props;
  const {
    field: { value, onChange },
  } = useController({ name, rules, control });

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <Select defaultValue={defaultValue} id={name} options={options} onChange={onChange} style={{ height: '30px', width: '100%' }} />
      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default ASelectInput;
