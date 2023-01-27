import React from 'react';
import styled from 'styled-components';

const RecentlyItem = () => {
  return <TestContainer>최근 아이템</TestContainer>;
};

export default RecentlyItem;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
