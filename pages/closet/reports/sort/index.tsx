import React from 'react';
import dynamic from 'next/dynamic';
import addHead from '../../../../util/addHead';

const RenderDevelopingPage = dynamic(() => import('../../../../components/state/developing/RenderDevelopingPage'));

function sort() {
  return <RenderDevelopingPage state='Develop' />;
}

export default addHead(sort, 'closet', '이 페이지는 분류별 차트 페이지입니다');
