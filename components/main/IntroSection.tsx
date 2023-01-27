import React from 'react';
import styled from 'styled-components';

const IntroSection = () => {
  return <TestContainer>인트로</TestContainer>;
};

export default IntroSection;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
