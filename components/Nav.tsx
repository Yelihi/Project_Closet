import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <>
      <TestContainer>네브바</TestContainer>
    </>
  );
};

export default Nav;

const TestContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.middleGrey};
`;
