import React, { useEffect } from 'react';
import axios from 'axios';

import Router from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';

import type { RootState } from '../reducers/types';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

import wrapper from '../store/configureStore';

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
  if (!context.req) {
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
