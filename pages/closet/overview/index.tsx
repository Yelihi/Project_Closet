import React from 'react';
import addHead from '../../../util/addHead';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { END } from 'redux-saga';

import { GetServerSidePropsContext } from 'next';
import type { SagaStore } from '../../../store/configureStore';

import wrapper from '../../../store/configureStore';

import * as t from '../../../reducers/type';

import IntroSection from '../../../components/main/IntroSection';

import Nav from '../../../components/Nav';
import Intersection from '../../../components/recycle/Intersection';
import OverviewInLoading, {
  Container,
  NavRow,
  IntroRow,
  DataRow,
  ResRow,
  InfoRow,
  LastDataRow,
} from '../../../components/main/state/OverviewInLoading';

import { SWR } from '../../../util/SWR/API';
import { baseURL } from '../../../sagas';

const TotalData = dynamic(() => import('../../../components/main/TotalData'));
const RecentlyItem = dynamic(() => import('../../../components/main/RecentlyItem'));
const CurrentYearPrice = dynamic(() => import('../../../components/main/CurrentYearPrice'));
const LastItem = dynamic(() => import('../../../components/main/LastItem'));
const RenderEmptyPage = dynamic(() => import('../../../components/state/empty/RenderEmptyPage'));
const RenderErrorPage = dynamic(() => import('../../../components/state/error/RenderErrorPage'));

const Overview = () => {
  const { data, error, isLoading } = SWR.getSummuryInUserItems();

  if (isLoading) return <OverviewInLoading />;
  if (error) return <RenderErrorPage state='OverView' />;
  if (!data || data.theOldestData === undefined) return <RenderEmptyPage state='OverView' />;

  return (
    <Container>
      <NavRow>
        <Nav />
      </NavRow>
      <Intersection></Intersection>
      <IntroRow>
        <IntroSection />
      </IntroRow>
      <DataRow>
        <TotalData data={data.categori} total={data.totalNumber} />
      </DataRow>
      <ResRow>
        <RecentlyItem items={data.lastDatas} />
      </ResRow>
      <InfoRow>
        <LastItem item={data.theOldestData} />
      </InfoRow>
      <LastDataRow>
        <CurrentYearPrice totalPrice={data.totalPrice} currentPrice={data.currentYearPrice} />
      </LastDataRow>
    </Container>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(store => async (context: GetServerSidePropsContext) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  const customHeaders = new Headers();
  customHeaders.append('cookie', '');
  if (context.req && cookie) {
    customHeaders.append('cookie', cookie);
  }
  const respone = await fetch(`${baseURL}/user`, { method: 'GET', credentials: 'include', headers: customHeaders });
  const data = await respone.json();
  // axios.defaults.headers.Cookie = '';
  // if (context.req && cookie) {
  //   axios.defaults.headers.Cookie = cookie;
  // }
  store.dispatch({
    // store에서 dispatch 하는 api
    type: t.LOAD_TO_MY_INFO_SUCCESE,
    data: data,
  });

  store.dispatch(END);
  await (store as SagaStore).sagaTask?.toPromise();

  return {
    props: {},
  };
});

export default React.memo(addHead(Overview, 'closet', '이 페이지는 전체 데이터를 요약해주는 메인 페이지입니다'));
