import React, { useEffect, useState, useRef, useCallback } from 'react';
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
import SortingResultComponent from '../../components/recycle/submitSuccess/SortingResultComponent';
import AButton from '../../components/recycle/element/button/AButton';
import InputPartial from '../../components/recycle/add/InputPartial';
import DropImageInput from '../../components/recycle/element/DropImageInput';
import { useSelector } from 'react-redux';
import { rootReducerType } from '../../reducers/types';

import { WarningTwoTone, CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';

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

const defaultValues = {
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
};

const add = () => {
  const dispatch = useDispatch();
  const [isClothes, setIsClothes] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const { imagePath, uploadItemsDone, lastAddDataIndex } = useSelector((state: rootReducerType) => state.post);
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const methods = useForm<AddInitialValue>({
    mode: 'onSubmit',
    defaultValues: defaultValues,
  });

  const { handleSubmit, control, watch, reset } = methods;

  // 짜증난다... 도대체 왜.
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    dispatch({
      type: t.RESET_UPLOAD_PAGE,
    });
  }, []);

  useEffect(() => {
    reset({ defaultValues });
  }, [uploadItemsDone]);

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
      {!uploadItemsDone && (
        <PageMainLayout title='ADD CLOTHES' subTitle='현 가정 옷장에 보관되어있는 의류의 이름과 색상, 종류 등 각각의 특성들을 기입하여 저장할 수 있습니다. '>
          <TestContainer>
            <AddSection>
              <FormProvider {...methods}>
                <AddForm onSubmit={handleSubmit(onSubmit)}>
                  <InputPartial title='SPECIFICATION' subtitle='의류 명칭, 가격 등 특성 정보를 저장해주세요. 필수 기입입니다.'>
                    {clothData.map(v => {
                      return (
                        <InputBackground key={v.name} title={v.name} subTitle={v.subTitle}>
                          <AInputElement control={control} name={v.name} errorMessage={v.errorMessage} placeholder={v.placeholder} rules={{ required: true }} />
                        </InputBackground>
                      );
                    })}
                  </InputPartial>
                  <InputPartial title='SORT CLOTHES' subtitle='카테고리를 선택해주시고, 각 카테고리에 맞는 측정치수를 cm 단위로 기입해주세요. 카테고리를 기입하셔야 이미지체크가 가능합니다'>
                    {categori.map(v => {
                      return (
                        <InputBackground key={v.name} title={v.name} subTitle={v.subTitle}>
                          <AInputElement control={control} name={v.name} errorMessage={v.errorMessage} options={v.options} defaultValue={v.defaultValue} rules={{ required: true }} />
                        </InputBackground>
                      );
                    })}
                    {['Outer', 'Shirt', 'Top'].includes(watch('categori')) ? <Measure control={control} nameArray={topMeasureName} subTitleArray={topMeasureSub} placeholder='cm' /> : null}
                    {['Pant'].includes(watch('categori')) ? <Measure control={control} nameArray={bottomMeasureName} subTitleArray={bottomMeasureSub} placeholder='cm' /> : null}
                    {['Shoes'].includes(watch('categori')) ? <Measure control={control} nameArray={shoesMeasureName} subTitleArray={shoesMeasureSub} placeholder='mm' /> : null}
                    {['Muffler'].includes(watch('categori')) ? <Measure control={control} nameArray={mufflerMeasureName} subTitleArray={mufflerMeasureSub} placeholder='cm' /> : null}
                  </InputPartial>
                  <InputPartial title='ABOUT ITEM' subtitle='의류에 대한 설명을 기입하실 수 있습니다. 구입처나 소재, 보관방법 등 구체적인 사안을 저장하실 수 있습니다.'>
                    {descriptionData.map(v => {
                      return (
                        <InputBackground key={v.name} title={v.name} subTitle={v.subTitle} textArea={true}>
                          <AInputElement control={control} name={v.name} placeholder={v.placeholder} />
                        </InputBackground>
                      );
                    })}
                  </InputPartial>
                  <InputPartial
                    title='IMAGE UPLOAD'
                    subtitle='이미지를 하나씩 업로드 할 수 있습니다. 필수 기입사항입니다. 이미지를 업로드 할 시 vision AI 를 통해 이미지의 적합성을 판단하게 됩니다. 허나 이는 참고용으로서 부정확할 수 있으니 주의바랍니다.'
                  >
                    <DropImageInput />
                  </InputPartial>
                  <PreviewSection>
                    {imagePath.length > 0 &&
                      imagePath.map((v, i) => {
                        let cate = watch('categori');
                        let isClothes = v.visionSearch.some(v => visionAI.includes(v.name));
                        let isCategori = v.visionSearch.map(v => v.name).some(item => categoriToVisionAI[cate]?.includes(item));
                        let confidence = categoriToVisionAI[cate]?.includes(v.visionSearch[0].name);
                        return (
                          <PreviewContainer key={v.filename} border={isClothes}>
                            {/* <img src={`${backUrl}/${v.filename}`} alt={v.filename} style={{ width: '250px' }} /> */}
                            <PreviewImage src={`${backUrl}/${v.filename}`} alt={v.filename} width={250} height={250} />
                            <PreviewTextContainer>
                              <PreviewText>
                                {isClothes ? (
                                  <TextBox>
                                    <span>의류 사진여부 판단</span>
                                    <Text>
                                      <CheckCircleTwoTone twoToneColor='#52c41a' />
                                      적절한 사진입니다.
                                    </Text>
                                  </TextBox>
                                ) : (
                                  <TextBox>
                                    <span>의류 사진여부 판단</span>
                                    <Text>
                                      <CloseCircleTwoTone twoToneColor='#E7373C' />
                                      의류 사진을 넣어주세요
                                    </Text>
                                  </TextBox>
                                )}
                                {isCategori ? (
                                  <TextBox>
                                    <span>카테고리 적합성</span>
                                    <Text>
                                      <CheckCircleTwoTone twoToneColor='#52c41a' />
                                      카테고리에 적합한 의류입니다
                                    </Text>
                                  </TextBox>
                                ) : (
                                  <TextBox>
                                    <span>카테고리 적합성</span>
                                    <Text>
                                      <WarningTwoTone twoToneColor='#F4A100' />
                                      저장하실 순 있지만 적합의류는 아닙니다.
                                    </Text>
                                  </TextBox>
                                )}
                                {confidence ? (
                                  <TextBox>
                                    <span>사진 내 카테고리 이미지 차지 비율</span>
                                    <Text>
                                      <CheckCircleTwoTone twoToneColor='#52c41a' />
                                      의류 비중이 적합합니다.
                                    </Text>
                                  </TextBox>
                                ) : (
                                  <TextBox>
                                    <span>사진 내 카테고리 이미지 차지 비율</span>
                                    <Text>
                                      <WarningTwoTone twoToneColor='#F4A100' />좀 더 적합의류의 비중이 높은 사진을 올려주세요
                                    </Text>
                                  </TextBox>
                                )}
                              </PreviewText>

                              <ButtonBox>
                                <AButton color='' disabled={false} dest='제거' onClick={onRemoveImage(i)} />
                              </ButtonBox>
                            </PreviewTextContainer>
                          </PreviewContainer>
                        );
                      })}
                  </PreviewSection>
                  <Float>
                    <SubmitButton>
                      <AButton type='submit' color='black' dest='저장하기' disabled={!isClothes} />
                    </SubmitButton>
                  </Float>
                </AddForm>
              </FormProvider>
            </AddSection>
          </TestContainer>
        </PageMainLayout>
      )}
      {uploadItemsDone && <SortingResultComponent sort='add' id={lastAddDataIndex} />}
    </PageLayout>
  );
};

export default React.memo(add);

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

const PreviewSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
`;

const PreviewContainer = styled.div<{ border: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 530px;
  height: auto;
  padding: 10px;
  border: 1px solid ${({ theme, border }) => (border ? theme.colors.success : theme.colors.red)};
  border-radius: 5px;
  gap: 30px;
  transition: box-shadow 0.25s ease-out;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;

const PreviewImage = styled(Image)`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const PreviewTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: c;
  height: 100%;
`;

const PreviewText = styled.div`
  margin-top: 10px;
`;

const TextBox = styled.div`
  display: inline-block;
  margin-bottom: 5px;

  > span {
    display: inline-block;
    font-size: 11px;
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.deepGrey};
    margin-bottom: 5px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  font-family: ${({ theme }) => theme.font.Efont};
`;

const ButtonBox = styled.div`
  margin-top: 20px;
`;

const Float = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const SubmitButton = styled.div`
  width: 200px;
`;
