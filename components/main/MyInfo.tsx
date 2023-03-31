import React, { useCallback } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import OverviewCL from '../recycle/element/overview/OverviewCL';

const MyInfo = () => {
  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);
  return (
    <OverviewCL Subject='test' Address='detail' onMove={moveToStore} divided={true}>
      <TestContainer>나의 정보</TestContainer>
    </OverviewCL>
  );
};

export default MyInfo;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
