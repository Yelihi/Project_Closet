import React from 'react';
import styled from 'styled-components';

import PageLayout from '../../../components/recycle/PageLayout';

export default function sort() {
  return (
    <PageLayout>
      <TestContainer>sort</TestContainer>
    </PageLayout>
  );
}

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2000px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
