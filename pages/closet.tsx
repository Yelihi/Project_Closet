import React, { useEffect } from 'react';
import axios from 'axios';
import { END } from 'redux-saga';

import Router from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';

import type { RootState } from '../reducers/types';
import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../store/configureStore';

import wrapper from '../store/configureStore';

import * as t from '../reducers/type';

const closet = () => {
  const { logOutDone } = useSelector((state: RootState) => state.user);
  // useEffect(() => {
  //   if (!logOutDone) {
  //     Router.push('/auth');
  //   }
  // }, [logOutDone]);

  return (
    <AppLayout>
      <div>실험중</div>
    </AppLayout>
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
    type: t.LOAD_TO_MY_INFO_REQUEST,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  if (!store.getState().user.me) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
});

export default closet;
