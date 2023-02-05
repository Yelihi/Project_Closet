import React, { useEffect } from 'react';
import styled from 'styled-components';

import PageLayout from '../../components/recycle/PageLayout';

const store = () => {
  return (
    <PageLayout>
      <TestContainer>store</TestContainer>
    </PageLayout>
  );
};

export default store;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2000px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
