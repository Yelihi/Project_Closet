import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Intersection from '../element/Intersection';

type myComponent = {
  children: ReactNode;
  title: string;
  subTitle: string;
};

const PageMainLayout = ({ children, title, subTitle }: myComponent) => {
  return (
    <MainContainer>
      <ComponentHead>
        <h1>{title}</h1>
        <span>{subTitle}</span>
      </ComponentHead>
      <Intersection />
      <div>{children}</div>
    </MainContainer>
  );
};

export default PageMainLayout;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: auto;
  padding: 17px 24px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > div {
    width: 100%;
    height: auto;
  }
`;

const ComponentHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h1 {
    font-size: 17px;
    line-height: 24px;
    font-family: ${({ theme }) => theme.font.Kfont};
    font-weight: ${({ theme }) => theme.fontWeight.Medium};
    margin-bottom: 10px;
  }

  > span {
    display: block;
    font-size: 12px;
    line-height: 18px;
    font-family: ${({ theme }) => theme.font.Kfont};
    font-weight: ${({ theme }) => theme.fontWeight.Light};
    margin-bottom: 5px;
  }
`;
