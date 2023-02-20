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
import MainRecycle from '../../components/recycle/mainRecycle';
import IntroSection from '../../components/main/IntroSection';
import TotalData from '../../components/main/TotalData';
import RecentlyItem from '../../components/main/RecentlyItem';
import MyInfo from '../../components/main/MyInfo';
import Nav from '../../components/Nav';

import Intersection from '../../components/recycle/element/Intersection';

const Overview = () => {
  return (
    <AppLayout>
      <Container>
        <NavRow>
          <Nav />
        </NavRow>
        <Intersection></Intersection>
        <IntroRow>
          <MainRecycle title='인트로' subTitle='여러분의 의류를 저장해보세요'>
            <IntroSection />
          </MainRecycle>
        </IntroRow>
        <DataRow>
          <MainRecycle title='총 저장의류' subTitle='분류별 의류 갯수'>
            <TotalData />
          </MainRecycle>
        </DataRow>
        <ResRow>
          <MainRecycle title='최근 등록 의류' subTitle='클릭시 상세페이지 이동합니다.'>
            <RecentlyItem />
          </MainRecycle>
        </ResRow>
        <InfoRow>
          <MainRecycle title='나의 사이즈' subTitle='평균적인 나의 의류 사이즈'>
            <MyInfo />
          </MainRecycle>
        </InfoRow>
      </Container>
    </AppLayout>
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

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();
  // if (!store.getState().user.me) {
  //   // getState() 는 store의 트리를 가져와준다.
  //   return {
  //     redirect: {
  //       destination: '/userlogin',
  //       permanent: false,
  //     },
  //   };
  // }
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
  gap: 50px;
  padding: 24px;
  ${media.tablet} {
    display: grid;
    grid-template-rows: 60px 1px 0.45fr 0.45fr;
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-areas:
      'nav nav'
      'inter inter'
      'intro data'
      'recently myinfo';
    gap: 1.5rem;
    height: 100%;
  }
`;

export const NavRow = styled.div`
  grid-area: nav;
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    display: flex;
    align-items: center;
    position: relative;
    height: auto;
    border-radius: 10px;
  }
`;

// export const Intersection = styled.div`
//   grid-area: inter;
//   width: 100%;
//   height: 1px;
//   background-color: rgba(30, 40, 51, 0.0671438);
// `;

const IntroRow = styled.div`
  grid-area: intro;
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
    margin-top: 0;
  }
`;

const DataRow = styled.div`
  grid-area: data;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
  }
`;

const ResRow = styled.div`
  grid-area: recently;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
  }
`;

const InfoRow = styled.div`
  grid-area: myinfo;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  ${media.tablet} {
    display: flex;
    align-items: center;
    height: auto;
  }
`;
