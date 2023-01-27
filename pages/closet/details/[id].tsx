import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import AppLayout from '../../../components/AppLayout';

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <AppLayout>
      <TestContainer>detail</TestContainer>
    </AppLayout>
  );
};

export default Details;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
