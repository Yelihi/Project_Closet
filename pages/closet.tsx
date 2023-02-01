import React, { useEffect } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';
import { ConfigProvider } from 'antd';
import { defaultTheme } from '../styles/antd/theme';

import AppLayout from '../components/AppLayout';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../store/configureStore';

import wrapper from '../store/configureStore';

import * as t from '../reducers/type';

const closet = () => {
  return (
    <ConfigProvider theme={defaultTheme}>
      <AppLayout>
        <div>실험중</div>
      </AppLayout>
    </ConfigProvider>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  console.log(context);
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  if (!store.getState().user.me) {
    // getState() 는 store의 트리를 가져와준다.
    return {
      redirect: {
        destination: '/userlogin',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
});

export default closet;
