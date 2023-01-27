import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { LaptopOutlined, NotificationOutlined, ContainerOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Button } from 'antd';

import Nav from './Nav';
import Link from 'next/link';
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
            <SideProfile />
            <SideList />
          </SideBar>
          <Main>{children}</Main>
        </MenuContainer>
      </AppLay>
    </>
  );
};

export default AppLayout;

const AppLay = styled(Layout)`
  height: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  color: white;
`;

const Main = styled.div`
  width: 100%;
  height: auto;
  background: #1f2128;
  color: white;
  padding: 0.25rem;
`;

const SideBar = styled.div`
  display: none;
  width: 255px;
  height: auto;
  background: #9aaab7;
  padding: 0.25rem;
  ${({ theme }) => theme.media.tablet`
    display: flex;
    width: 100px;
  `}
  ${({ theme }) => theme.media.desktop`
    display: flex;
    width: 255px;
  `}
`;
