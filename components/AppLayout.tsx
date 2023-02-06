import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { media } from '../styles/media';
import { LaptopOutlined, NotificationOutlined, ContainerOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Button } from 'antd';

import Link from 'next/link';

import Nav from './Nav';
import Footer from './Footer';
import { useDispatch } from 'react-redux';

import { SHOW_UPLOAD_DRAWER } from '../reducers/type';
import { logoutRequestAction } from '../reducers/user';
import Item from 'antd/es/list/Item';
import UploadClothes from './Upload';

import SideList from './sidebar/SideList';
import SideProfile from './sidebar/SideProfile';

interface AppLayoutProps {
  // 레이아웃을 담당하는 Props 타입설정
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <AppLay>
        <MenuContainer>
          <SideBar>
            <StickyBox>
              <SideProfile />
              <SideList />
            </StickyBox>
          </SideBar>
          <MainFooterBox>
            <Main>{children}</Main>
            <Footer />
          </MainFooterBox>
        </MenuContainer>
      </AppLay>
    </>
  );
};

export default AppLayout;

const AppLay = styled(Layout)`
  min-height: 200%;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

const MainFooterBox = styled.div`
  width: 100%;
  height: auto;
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.25rem;
`;

const SideBar = styled.div`
  display: none;
  width: fit-content;
  height: auto;
  background: ${({ theme }) => theme.colors.brown};
  padding: 0.25rem;
  ${media.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100px;
  }
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
  }
`;

const StickyBox = styled.div`
  position: sticky;
  top: -1px;
  width: inherit;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
