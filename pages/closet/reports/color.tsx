import React, { useEffect } from 'react';
import styled from 'styled-components';

import PageLayout from '../../../components/recycle/PageLayout';
import EmptyData from '../../../components/recycle/EmptyData';

const color = () => {
  return (
    <PageLayout>
      <TestContainer>
        <EmptyData height={70} />
      </TestContainer>
    </PageLayout>
  );
};

export default color;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;
