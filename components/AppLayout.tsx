import React, { useCallback } from 'react';
import { LaptopOutlined, NotificationOutlined, ContainerOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Button } from 'antd';

import Nav from './Nav';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { SHOW_UPLOAD_DRAWER } from '../reducers/type';
import Item from 'antd/es/list/Item';
import UploadClothes from './Upload';

interface AppLayoutProps {
  // 레이아웃을 담당하는 Props 타입설정
  children: React.ReactNode;
}

const { Header, Content, Footer, Sider } = Layout;

const mainMenu: MenuProps['items'] = ['Home', 'SignUp', 'Upload', 'About'].map((item, index) =>
  index === 2
    ? { label: item, key: index }
    : {
        label: <Link href={`/${item.toLowerCase()}`}>{item}</Link>,
        key: index,
      }
);

const subMenu: MenuProps['items'] = [
  {
    label: <Link href='/profile'>Profile</Link>,
    key: 'profile',
    icon: <UserOutlined />,
  },
  {
    label: 'Closet',
    key: 'sub1',
    icon: <LaptopOutlined />,
    children: [
      {
        label: <Link href='/container'>Container</Link>,
        key: 'container',
        icon: <ContainerOutlined />,
      },
      {
        label: <Link href='/chart'>Chart</Link>,
        key: 'chart',
        icon: <PieChartOutlined />,
      },
    ],
  },
];

const AppLayout = ({ children }: AppLayoutProps) => {
  const dispatch = useDispatch();

  const showOpload: MenuProps['onClick'] = e => {
    console.log('click', e);
    if (e.key === '2') {
      dispatch({
        type: SHOW_UPLOAD_DRAWER,
      });
    }
  };
  return (
    <>
      <Layout>
        <Header className='header'>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} items={mainMenu} onClick={showOpload} />
        </Header>
        <UploadClothes />
        <Content style={{ padding: '0 50px ' }}>
          <Layout className='site-layout-background' style={{ padding: '24px 0' }}>
            <Sider width={200} className='site-layout-background'>
              <Menu mode='inline' defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={subMenu} />
            </Sider>
            <Content
              className='site-layout-background'
              style={{
                padding: 24,
                margin: 0,
                minHeight: '100vh',
                backgroundColor: 'white',
              }}
            >
              {children}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Yelihi ©2018 Created by Ant UED</Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
