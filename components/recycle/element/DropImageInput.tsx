import React, { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { Input } from 'antd';

import { TControl } from './type';

function DropImageInput<T extends FieldValues>({ name, rules, control, ...props }: TControl<T>) {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const {
    field: { value, onChange },
    fieldState: { isDirty, isTouched, error },
  } = useController({ name, rules, control });

  const handleDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  return (
    <>
      <form>
        <input type='file' id={name} multiple={true} />
        <label htmlFor={name}>{name}</label>
      </form>

      {/* {error && <span>에러</span>} */}
    </>
  );
}

export default DropImageInput;
