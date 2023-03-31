import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import TotalPie from './chart/TotalPie';

import { categoriObject } from '../store/TableData';

import { TbTransferIn } from 'react-icons/tb';
import Router from 'next/router';

type Props = {
  data: categoriObject;
  total: number;
};

const TotalData = ({ data, total }: Props) => {
  const iconStyle = useMemo(() => {
    return {
      width: '12px',
      height: '12px',
    };
  }, []);

  const moveToStore = useCallback(() => {
    Router.push('/closet/store');
  }, []);

  return (
    <MainContainer>
      <Container>
        <HeadSection>
          <Title>total quantity</Title>
          <AddButton onClick={moveToStore}>
            <TbTransferIn style={iconStyle} />
            <div>Store</div>
          </AddButton>
        </HeadSection>
        <TotalDiv>
          <span>{total}</span>
          <p>벌</p>
        </TotalDiv>
        <DestDiv>
          <p>현재까지 저장된 모든 의류 및 신발의 수량입니다</p>
        </DestDiv>
        <TotalPie item={data} />
      </Container>
    </MainContainer>
  );
};

export default TotalData;

const MainContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 17px 24px;
  margin-bottom: 10px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
`;

const HeadSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;

const Title = styled.span`
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.Bold};
`;

const TotalDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  gap: 3px;

  > span {
    font-size: clamp(33px, 3.6vw, 55px);
    font-weight: ${({ theme }) => theme.fontWeight.Bold};
    font-family: ${({ theme }) => theme.font.Efont};
  }

  > p {
    font-size: clamp(17px, 1.8vw, 30px);
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-top: 10px;
  }
`;

const DestDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  > p {
    font-size: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    font-family: ${({ theme }) => theme.font.Efont};
    color: ${({ theme }) => theme.colors.lightGrey};
    margin-top: 2px;
  }
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.mainGrey};
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s ease-out;

  > div {
    font-size: 11px;
  }

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  }
`;
