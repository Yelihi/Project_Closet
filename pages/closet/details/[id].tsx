import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import PageLayout from '../../../components/recycle/PageLayout';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PageLayout>
      <TestContainer>details</TestContainer>
    </PageLayout>
  );
};

export default Details;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 2000px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
