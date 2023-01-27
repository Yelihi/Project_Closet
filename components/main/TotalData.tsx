import React from 'react';
import styled from 'styled-components';

const TotalData = () => {
  return <TestContainer>총 데이터</TestContainer>;
};

export default TotalData;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
