import React from 'react';
import styled from 'styled-components';

const MyInfo = () => {
  return <TestContainer>나의 정보</TestContainer>;
};

export default MyInfo;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
