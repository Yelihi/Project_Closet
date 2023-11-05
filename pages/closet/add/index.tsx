import React, { useCallback } from 'react';
import dynamic from 'next/dynamic';
import * as t from '../../../reducers/type';
import addHead from '../../../util/addHead';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../store/configureStore';

import wrapper from '../../../store/configureStore';

import PageLayout from '../../../components/recycle/layout/PageLayout';

import { useSelector } from 'react-redux';
import { rootReducerType } from '../../../reducers/types';
import { addPageLayoutProps } from '../../../components/add/data/InputDataInAdd';

const ItemForm = dynamic(() => import('../../../components/recycle/formElements/ItemForm'));

const add = () => {
  const { lastAddDataIndex } = useSelector((state: rootReducerType) => state.post);

  const transferTypes = useCallback(() => {
    return t.UPLOAD_ITEMS_REQUEST;
  }, []);

  return (
    <PageLayout>
      <ItemForm
        title={addPageLayoutProps.title}
        subTitle={addPageLayoutProps.subTitle}
        type='add'
        resultNumber={lastAddDataIndex}
        Submit={transferTypes}
      />
    </PageLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch({
    type: t.RESET_UPLOAD_PAGE,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();

  return {
    props: {},
  };
});

export default React.memo(addHead(add, 'closet', '이 페이지는 의류를 저장하는 페이지입니다'));
