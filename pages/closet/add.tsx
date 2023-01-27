import React from 'react';
import styled from 'styled-components';

import AppLayout from '../../components/AppLayout';

const add = () => {
  return (
    <AppLayout>
      <TestContainer>add</TestContainer>
    </AppLayout>
  );
};

export default add;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
