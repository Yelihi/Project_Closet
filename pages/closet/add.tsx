import React, { useEffect, useState, useRef, MutableRefObject, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';
import * as t from '../../reducers/type';
import Image from 'next/image';

import { FieldValues, useForm, FormProvider, FieldPath } from 'react-hook-form';
import { clothData, categori, descriptionData } from '../../components/add/ElementData';
import { visionAI, categoriToVisionAI } from '../../components/add/VisionAIData';
import { topMeasureName, bottomMeasureName, shoesMeasureName, mufflerMeasureName } from '../../components/add/ElementData';
import { topMeasureSub, bottomMeasureSub, shoesMeasureSub, mufflerMeasureSub } from '../../components/add/ElementData';

import { backUrl } from '../../config/config';
import PageLayout from '../../components/recycle/PageLayout';
import PageMainLayout from '../../components/recycle/main/PageMainLayout';

import AInputElement from '../../components/recycle/element/AInputElement';
import Measure from '../../components/recycle/add/Measure';
import InputBackground from '../../components/recycle/add/InputBackgroud';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../reducers/types';

import type { ImagePathObject } from '../../reducers/types/post';

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
  image: ImagePathObject[];
  price: number;
  color: string;
  categori: string;
  purchaseDay: string;
  categoriItem: Measures;
}

const add = () => {
  const dispatch = useDispatch();
  const [isClothes, setIsClothes] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const { imagePath, uploadItemsDone } = useSelector((state: rootReducerType) => state.post);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const methods = useForm<AddInitialValue>({
    mode: 'onSubmit',
    defaultValues: {
      productName: '',
      description: '',
      image: [],
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

  // 짜증난다... 도대체 왜.
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (imagePath.length === 0) {
      return;
    }
    let visionSearch = imagePath.map(v => v.visionSearch?.some(i => visionAI.includes(i.name)));
    if (visionSearch.every(bool => bool === true)) {
      setIsClothes(true);
    } else {
      setIsClothes(false);
    }
  }, [imagePath]);

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

  const onRemoveImage = useCallback(
    (index: number) => () => {
      dispatch({
        type: t.REMOVE_IMAGE,
        data: index,
      });
    },
    []
  );

  const onSubmit = (data: AddInitialValue) => {
    data.image = imagePath;
    return dispatch({
      type: t.UPLOAD_ITEMS_REQUEST,
      data: data,
    });
  };

  if (!hydrated) {
    return null;
  }

  return (
    <PageLayout>
      <PageMainLayout title='Add Clothes' subTitle='Fill out a few details to add your clothes database'>
        <TestContainer>
          <AddSection>
            <FormProvider {...methods}>
              <AddForm onSubmit={handleSubmit(onSubmit)}>
                {clothData.map(v => {
                  return (
                    <InputBackground key={v.name} title={v.name} subTitle={v.subTitle}>
                      <AInputElement control={control} name={v.name} errorMessage={v.errorMessage} placeholder={v.placeholder} rules={{ required: true }} />
                    </InputBackground>
                  );
                })}
                {categori.map(v => {
                  return (
                    <InputBackground key={v.name} title={v.name} subTitle={v.subTitle}>
                      <AInputElement key={v.name} control={control} name={v.name} errorMessage={v.errorMessage} options={v.options} defaultValue={v.defaultValue} rules={{ required: true }} />
                    </InputBackground>
                  );
                })}
                {['Outer', 'Shirt', 'Top'].includes(watch('categori')) ? <Measure control={control} nameArray={topMeasureName} subTitleArray={topMeasureSub} placeholder='cm' /> : null}
                {['Pant'].includes(watch('categori')) ? <Measure control={control} nameArray={bottomMeasureName} subTitleArray={bottomMeasureSub} placeholder='cm' /> : null}
                {['Shoes'].includes(watch('categori')) ? <Measure control={control} nameArray={shoesMeasureName} subTitleArray={shoesMeasureSub} placeholder='mm' /> : null}
                {['Muffler'].includes(watch('categori')) ? <Measure control={control} nameArray={mufflerMeasureName} subTitleArray={mufflerMeasureSub} placeholder='cm' /> : null}
                {descriptionData.map(v => {
                  return (
                    <InputBackground key={v.name} title={v.name} subTitle={v.subTitle} textArea={true}>
                      <AInputElement key={v.name} control={control} name={v.name} placeholder={v.placeholder} />
                    </InputBackground>
                  );
                })}
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
                {imagePath.length > 0 &&
                  imagePath.map((v, i) => {
                    let cate = watch('categori');
                    let confidence = categoriToVisionAI[cate].includes(v.visionSearch[0].name);
                    return (
                      <div key={v.filename} style={{ display: 'inline-block' }}>
                        {/* <img src={`${backUrl}/${v.filename}`} alt={v.filename} style={{ width: '250px' }} /> */}
                        <PreviewImage src={`${backUrl}/${v.filename}`} alt={v.filename} width={250} height={250} />
                        <div>
                          <div>{v.visionSearch.some(v => visionAI.includes(v.name)) ? '다소 적합한 의류 사진입니다.' : '의류 사진을 넣어주세요'}</div>
                          <div>{v.visionSearch.map(v => v.name).some(item => categoriToVisionAI[cate].includes(item)) ? '분류에 맞는 사진입니다' : '분류에 적합하진 않지만 저장하실수 있습니다.'}</div>
                          <div>{confidence ? '적합한 사진입니다' : '사진 전체를 저장하시려는 의류로 지정해주세요'}</div>
                        </div>

                        <div>
                          <button onClick={onRemoveImage(i)}>제거</button>
                        </div>
                      </div>
                    );
                  })}
                <button type='submit' disabled={!isClothes}>
                  전송
                </button>
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
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};
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

const PreviewImage = styled(Image)`
  width: 200px;
  height: auto;
`;
