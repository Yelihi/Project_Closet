import React, { useEffect, useState, useRef, MutableRefObject } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { CirclePicker } from 'react-color';
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
import ADatepicker from '../../components/recycle/element/ADatepicker';
import ADescription from '../../components/recycle/element/ADescription';
import AColorPicker from '../../components/recycle/element/AColorPicker';

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
  image: FormData;
  price: number;
  color: string;
  categori: string;
  purchaseDay: string;
  categoriItem: Measures;
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const methods = useForm<AddInitialValue>({
    mode: 'onSubmit',
    defaultValues: {
      productName: '',
      description: '',
      image: {},
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
  const { handleSubmit, control, watch, register } = methods;

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      console.log('image', e.dataTransfer.files);
      const imageFormData = new FormData(); // 멀티파트 형식으로 데이터 보내기
      [].forEach.call(e.dataTransfer.files, file => {
        imageFormData.append('image', file);
      });
      dispatch({
        type: t.UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      console.log('image', e.target.files);
      const imageFormData = new FormData(); // 멀티파트 형식으로 데이터 보내기
      [].forEach.call(e.target.files, file => {
        imageFormData.append('image', file);
      });
      dispatch({
        type: t.UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      });
    }
  };

  const onButtonClick = () => {
    if (inputRef.current) {
      // inputRef.current 가 null 일 수 있으니, 조건문으로 확인해주기
      inputRef.current.click();
    }
  };

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
                  <AColorPicker control={control} name='color' rules={{ required: '선택해주세요' }} />
                </Row>
                <Row>
                  <ANumberInput control={control} name='price' placeholder='won' rules={{ required: '입력해주세요' }} />
                </Row>
                <Row>
                  <ASelectInput control={control} name='categori' options={categoriOption} defaultValue='카테고리를 선택해주세요' />
                </Row>
                <Row>
                  <ADatepicker control={control} name='purchaseDay' />
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
                <Row>
                  <ADescription control={control} name='description' rules={{ required: '입력해주세요' }} />
                </Row>
                <ImageUploadContainer onDragEnter={handleDrag}>
                  <input
                    {...(register('image'),
                    {
                      onChange: handleChange,
                      ref: inputRef,
                    })}
                    // ref={inputRef}
                    name='image'
                    type='file'
                    id='image'
                    multiple={true}
                    hidden
                  />
                  <LabelFileUpload htmlFor='image' dragActive={dragActive}>
                    <div>
                      <p>Drag and Drop your file here or</p>
                      <UploadButton onClick={onButtonClick}>Upload a file</UploadButton>
                    </div>
                  </LabelFileUpload>
                  {dragActive && <DragFileElement onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></DragFileElement>}
                </ImageUploadContainer>

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  ${media.tablet} {
    grid-template-columns: 0.5fr 0.5fr;
  }
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

const ImageUploadContainer = styled.div`
  height: 16rem;
  max-width: 100%;
  text-align: center;
  position: relative;
`;

const LabelFileUpload = styled.label<{ dragActive: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${({ theme }) => theme.colors.brown};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.mainGrey};

  ${props =>
    props.dragActive &&
    css`
      background-color: white;
    `}
`;

const UploadButton = styled.button`
  cursor: pointer;
  height: 25px;
  padding: 0.25rem;
  font-size: 13px;
  border: none;
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.brown};
  border-radius: 5px;
  transition: all 0.25 ease-out;

  :hover {
    opacity: 0.6;
  }
`;

const DragFileElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  top: 0px;
  left: 0px;
`;
