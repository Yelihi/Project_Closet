import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Router from 'next/router';

import OverviewCL from '../recycle/element/overview/OverviewCL';
import TotalPriceBar from './chart/TotalPriceBar';

type CurrentPriceProps = {
  totalPrice: number;
  currentPrice: number;
};

const currentYear = new Date().getFullYear();

const CurrentYearPrice = ({ totalPrice, currentPrice }: CurrentPriceProps) => {
  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);
  return (
    <OverviewCL Subject='TotalPrice' Address='Store' onMove={moveToStore} divided={true}>
      <TestContainer>
        <Description>{`Current : ${currentYear}년을 기준으로 측정된 가격`}</Description>
        <TotalPriceBar currentPrice={currentPrice} totalPrice={totalPrice} />
      </TestContainer>
    </OverviewCL>
  );
};

export default CurrentYearPrice;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
`;

const Description = styled.span`
  font-size: 12px;
  font-family: ${({ theme }) => theme.font.Efont};
  font-weight: ${({ theme }) => theme.fontWeight.Medium};
  margin-top: 5px;
`;
