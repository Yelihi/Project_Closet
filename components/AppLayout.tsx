import React from 'react';
import {
  LaptopOutlined,
  NotificationOutlined,
  ContainerOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, Button } from 'antd';

import Nav from './Nav';
import Link from 'next/link';

interface AppLayoutProps {
  // 레이아웃을 담당하는 Props 타입설정
  children: React.ReactNode;
}

const { Header, Content, Footer, Sider } = Layout;

const mainMenu: MenuProps['items'] = ['Home', 'SignUp', 'Upload', 'About'].map(
  (item, index) => ({
    label: <Link href={`/${item.toLowerCase()}`}>{item}</Link>,
    key: index,
  })
);

const subMenu: MenuProps['items'] = [
  {
    label: <Link href="/profile">Profile</Link>,
    key: 'profile',
    icon: <UserOutlined />,
  },
  {
    label: 'Closet',
    key: 'sub1',
    icon: <LaptopOutlined />,
    children: [
      {
        label: <Link href="/container">Container</Link>,
        key: 'container',
        icon: <ContainerOutlined />,
      },
      {
        label: <Link href="/chart">Chart</Link>,
        key: 'chart',
        icon: <PieChartOutlined />,
      },
    ],
  },
];

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={mainMenu}
          />
        </Header>
        <Content style={{ padding: '0 50px ' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Layout
            className="site-layout-background"
            style={{ padding: '24px 0' }}
          >
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={subMenu}
              />
            </Sider>
            <Content
              className="site-layout-background"
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
        <Footer style={{ textAlign: 'center' }}>
          Yelihi ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default AppLayout;
