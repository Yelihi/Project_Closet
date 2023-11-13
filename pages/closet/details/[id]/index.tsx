import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import * as t from '../../../../reducers/type';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import addHead from '../../../../util/addHead';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../../store/configureStore';

import wrapper from '../../../../store/configureStore';

import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../../reducers/types';

import CustomBread from '../../../../components/recycle/CustomBread';
import PageLayout from '../../../../components/recycle/layout/PageLayout';
import PageMainLayout from '../../../../components/recycle/layout/PageMainLayout';
import DetailsModifyButtons from '../../../../components/details/DetailsModifyButtons';
import DetailsMain from '../../../../components/details/DetailsMain';

import { BreadcrumbItems } from '../../../../components/details/ElementData';
import { addPageLayoutProps } from '../../../../components/details/ElementData';

const ItemForm = dynamic(() => import('../../../../components/recycle/formElements/ItemForm'));
const SortingResultComponent = dynamic(
  () => import('../../../../components/recycle/submitSuccess/SortingResultComponent')
);

const Details = () => {
  const router = useRouter();
  const { deleteItemDone, deleteItemError, singleItem } = useSelector((state: rootReducerType) => state.post);
  const { id } = router.query;
  const [isModifyMode, setIsModifyMode] = useState(false);

  const { title, subTitle } = addPageLayoutProps;

  const transferTypes = useCallback(() => {
    return t.PATCH_ITEM_REQUEST;
  }, []);

  const startModify = useCallback(() => {
    setIsModifyMode(true);
  }, []);

  return (
    <PageLayout>
      {deleteItemDone ? <SortingResultComponent sort='deleteItem' id={Number(id)} /> : null}
      {deleteItemError ? <SortingResultComponent sort='deleteItemFailure' id={Number(id)} /> : null}
      {!deleteItemDone && !deleteItemError && !isModifyMode ? (
        <PageMainLayout istitle={false}>
          <HandleContainer>
            <CustomBread items={BreadcrumbItems} />
            <DetailsModifyButtons id={id} startModifyFunc={startModify} position='up' />
          </HandleContainer>
          <DetailsMain />
          <DetailsModifyButtons id={id} startModifyFunc={startModify} position='down' />
        </PageMainLayout>
      ) : null}
      {!deleteItemDone && !deleteItemError && isModifyMode ? (
        <ItemForm
          title={title}
          subTitle={subTitle}
          type='details'
          itemId={Number(id)}
          resultNumber={Number(id)}
          Submit={transferTypes}
          setState={setIsModifyMode}
        />
      ) : null}
    </PageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }

  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.LOAD_ITEM_REQUEST,
    data: { clothId: context.params?.id },
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  return {
    props: {},
  };
});

export default addHead(Details, 'closet', '이 페이지는 의류 상세페이지이며, 수정이나 삭제를 할 수 있습니다');

const HandleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 15px 0;
`;
