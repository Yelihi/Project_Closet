import { StaticImageData } from 'next/image';
import { Control, FieldPath, FieldValues, RegisterOptions, ControllerRenderProps } from 'react-hook-form';

export interface TControl<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: RegisterOptions<T>;
  errorMessage?: string;
}

export interface TControlArray<T extends FieldValues> {
  nameArray: FieldPath<T>[];
  control: Control<T>;
  rules?: RegisterOptions<T>;
  subTitleArray?: string[];
}

/**
 * button type
 */

export interface ButtonProp {
  color: string;
  disabled: boolean;
  src?: StaticImageData;
  dest: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
