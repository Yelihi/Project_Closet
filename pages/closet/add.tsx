import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import * as t from '../../reducers/type';

import { useForm } from 'react-hook-form';

import PageLayout from '../../components/recycle/PageLayout';
import PageMainLayout from '../../components/recycle/PageMainLayout';

interface AddInitialValue {
  productName: string;
  description: string;
  price: number;
  color: string;
  categori: string;
  purchaseDay: string;
}

const add = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    watch,
    reset,
    handleSubmit,
    getValues,
    setError,
    setFocus,
  } = useForm<AddInitialValue>({
    mode: 'onSubmit',
    defaultValues: {
      productName: '',
      description: '',
      price: 0,
      color: '',
      categori: '',
      purchaseDay: '',
    },
  });

  const initialValue: AddInitialValue = {
    productName: '',
    description: '',
    price: 0,
    color: '',
    categori: '',
    purchaseDay: '',
  };

  return (
    <PageLayout>
      <PageMainLayout title='Add Clothes' subTitle='Fill out a few details to add your clothes database'>
        <TestContainer>
          <section>
            <div>
              <form>
                <input
                  type='text'
                  {...(register('productName'),
                  {
                    required: true,
                  })}
                />
              </form>
            </div>
          </section>
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
