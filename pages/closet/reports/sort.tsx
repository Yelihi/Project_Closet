import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import PageLayout from '../../../components/recycle/PageLayout';
import KeepWorking from '../../../components/recycle/KeepWorking';

export default function sort() {
  return (
    <PageLayout>
      <TestContainer>
        <KeepWorking height={100} />
      </TestContainer>
    </PageLayout>
  );
}

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
`;
