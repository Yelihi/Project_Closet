import React from 'react';
import styled from 'styled-components';
import { FieldValues, useFormContext } from 'react-hook-form';

import { TControl, TControlArray } from './element/type';
import { topMeasure, bottomMeasure, shoesMeasure, mufflerMeasure } from '../../pages/closet/add';
import { AddInitialValue } from '../../pages/closet/add';

import ANumberInput from './element/ANumberInput';

export type CustomSelectProps<T> = {
  placeholder: string;
};

export type TPorps<T extends FieldValues> = CustomSelectProps<T> & TControlArray<T>;

function Measure<T extends FieldValues>(props: TPorps<T>) {
  const context = useFormContext<AddInitialValue>();
  const { watch } = context;
  const { nameArray, rules, control, placeholder } = props;
  return (
    <>
      {['Outer', 'Top', 'Shirt'].includes(watch('categori')) ? (
        <>
          <Row>
            <ANumberInput control={control} name={nameArray[0]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[1]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[2]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[3]} rules={rules} placeholder={placeholder} />
          </Row>
        </>
      ) : null}
      {['Pant'].includes(watch('categori')) ? (
        <>
          <Row>
            <ANumberInput control={control} name={nameArray[0]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[1]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[2]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[3]} rules={rules} placeholder={placeholder} />
          </Row>
          <Row>
            <ANumberInput control={control} name={nameArray[4]} rules={rules} placeholder={placeholder} />
          </Row>
        </>
      ) : null}
      {['Shoes'].includes(watch('categori')) ? (
        <>
          <Row>
            <ANumberInput control={control} name={nameArray[0]} rules={rules} placeholder={placeholder} />
          </Row>
        </>
      ) : null}
      {['Muffler'].includes(watch('categori')) ? (
        <>
          <Row>
            <ANumberInput control={control} name={nameArray[0]} rules={rules} placeholder={placeholder} />
          </Row>
        </>
      ) : null}
    </>
  );
}

export default Measure;

const Row = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
