import React from 'react';
import styled from 'styled-components';
import { media } from '../../styles/media';

import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../store/configureStore';

import wrapper from '../../store/configureStore';

import * as t from '../../reducers/type';

import AppLayout from '../../components/AppLayout';
import IntroSection from '../../components/main/IntroSection';
import TotalData from '../../components/main/TotalData';
import RecentlyItem from '../../components/main/RecentlyItem';
import MyInfo from '../../components/main/MyInfo';
import Nav from '../../components/Nav';

const Overview = () => {
  return (
    <AppLayout>
      <Container>
        <NavRow>
          <Nav />
        </NavRow>
        <IntroRow>
          <IntroSection />
        </IntroRow>
        <DataRow>
          <TotalData />
        </DataRow>
        <ResRow>
          <RecentlyItem />
        </ResRow>
        <InfoRow>
          <MyInfo />
        </InfoRow>
      </Container>
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

export default Overview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 100px;
  padding: 24px;
  ${media.tablet} {
    display: grid;
    grid-template-rows: 50px 0.45fr 0.45fr;
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-areas:
      'nav nav'
      'intro data'
      'recently myinfo';
    gap: 1rem;
    height: 100%;
  }
`;

const NavRow = styled.div`
  grid-area: nav;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  ${media.tablet} {
    display: flex;
    align-items: center;
    position: relative;
    height: 50px;
  }
`;

const IntroRow = styled.div`
  grid-area: intro;
  display: flex;
  align-items: center;
  margin-top: 100px;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: 400px;
    margin-top: 0;
  }
`;

const DataRow = styled.div`
  grid-area: data;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: 400px;
  }
`;

const ResRow = styled.div`
  grid-area: recently;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: 400px;
  }
`;

const InfoRow = styled.div`
  grid-area: myinfo;
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: 400px;
  }
`;
