import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as t from '../../reducers/type';

import { FieldValues, useForm, FormProvider, FieldPath } from 'react-hook-form';
import { TControlArray } from '../../components/recycle/element/type';

import { Input } from 'antd';
import { media } from '../../styles/media';
import PageLayout from '../../components/recycle/PageLayout';
import PageMainLayout from '../../components/recycle/PageMainLayout';

import AInput from '../../components/recycle/element/AInput';
import ANumberInput from '../../components/recycle/element/ANumberInput';
import ASelectInput from '../../components/recycle/element/ASelectInput';
import Measure from '../../components/recycle/Measure';

export interface Measures {
  shoulder?: number;
  arm?: number;
  totalLength?: number;
  chest?: number;
  rise?: number;
  hem?: number;
  waist?: number;
  thigh?: number;
  size?: number;
}

export interface AddInitialValue extends FieldValues {
  productName: string;
  description: string;
  price: number;
  color: string;
  categori: string;
  purchaseDay: string;
  categoriItem: Measures;
}

export interface InputValue {
  name: string;
}

const categoriOption = [
  { value: 'Outer', label: 'Outer' },
  { value: 'Shirt', label: 'Shirt' },
  { value: 'Top', label: 'Top' },
  { value: 'Pant', label: 'Pant' },
  { value: 'Shoes', label: 'Shoes' },
  { value: 'Muffler', label: 'Muffler' },
];

export const topMeasure = ['categoriItem.chest', 'categoriItem.shoulder', 'categoriItem.arm', 'categoriItem.totalLength'];
export const bottomMeasure = ['categoriItem.totalLength', 'categoriItem.rise', 'categoriItem.hem', 'categoriItem.waist', 'categoriItem.thigh'];
export const shoesMeasure = ['categoriItem.size'];
export const mufflerMeasure = ['categoriItem.totalLength'];

const add = () => {
  const dispatch = useDispatch();
  const methods = useForm<AddInitialValue>({
    mode: 'onSubmit',
    defaultValues: {
      productName: '',
      description: '',
      price: 0,
      color: '',
      categori: '',
      purchaseDay: '',
      categoriItem: {
        shoulder: 0,
        arm: 0,
        totalLength: 0,
        chest: 0,
        rise: 0,
        hem: 0,
        waist: 0,
        thigh: 0,
        size: 0,
      },
    },
  });
  const { handleSubmit, control, watch } = methods;

  const onSubmit = (data: AddInitialValue) => {
    // dispatch({ type: t.UPLOAD_ITEMS_REQUEST, data });
    console.log(data);
  };

  return (
    <PageLayout>
      <PageMainLayout title='Add Clothes' subTitle='Fill out a few details to add your clothes database'>
        <TestContainer>
          <AddSection>
            <FormProvider {...methods}>
              <AddForm onSubmit={handleSubmit(onSubmit)}>
                <Row>
                  <AInput control={control} name='productName' rules={{ required: '입력해주세요' }} />
                </Row>
                <Row>
                  <AInput control={control} name='color' rules={{ required: '입력해주세요' }} />
                </Row>
                <Row>
                  <ANumberInput control={control} name='price' placeholder='won' rules={{ required: '입력해주세요' }} />
                </Row>
                <Row>
                  <ASelectInput control={control} name='categori' options={categoriOption} defaultValue='카테고리를 선택해주세요' />
                </Row>
                {['Outer', 'Shirt', 'Top'].includes(watch('categori')) ? (
                  <Row>
                    <Measure control={control} nameArray={topMeasure} rules={{ required: '입력해주세요' }} placeholder='cm' />
                  </Row>
                ) : null}
                {['Pant'].includes(watch('categori')) ? (
                  <Row>
                    <Measure control={control} nameArray={bottomMeasure} rules={{ required: '입력해주세요' }} placeholder='cm' />
                  </Row>
                ) : null}
                {['Shoes'].includes(watch('categori')) ? (
                  <Row>
                    <Measure control={control} nameArray={shoesMeasure} rules={{ required: '입력해주세요' }} placeholder='cm' />
                  </Row>
                ) : null}
                {['Muffler'].includes(watch('categori')) ? (
                  <Row>
                    <Measure control={control} nameArray={mufflerMeasure} rules={{ required: '입력해주세요' }} placeholder='cm' />
                  </Row>
                ) : null}

                <button type='submit'>전송</button>
              </AddForm>
            </FormProvider>
          </AddSection>
        </TestContainer>
      </PageMainLayout>
    </PageLayout>
  );
};

export default add;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2000px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;

const AddSection = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
`;

const AddForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  width: 100%;
  height: auto;
  padding: 10px 0;

  ${media.tablet} {
    grid-template-columns: 0.5fr 0.5fr;
  }
`;
