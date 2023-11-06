import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet } from 'react-router-dom';
import BreadCrumNav from '../../component/BreadCrumNav';
const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const LayoutPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent:'space-between',
          alignItems: 'center',
          paddingLeft : 200,
        }}
      >
          <span className='text-white font-medium text-2xl pl-10'>
            Cyper Flix Admin
          </span>
      
          <button className='bg-white text-black rounded px-5 h-10 leading-10 shadow shadow-white font-medium'>Log In</button>


      </Header>
      <Layout>
        <Sider
          theme="dark"
          width={200}
          style={{
            overflow:"auto",
            height:"100vh",
            position:"fixed",
            left:0,
            top:0,
            bottom:0,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          className='site-layout'
          style={{
            marginLeft:200,
          }}
        >
          <BreadCrumNav/>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Outlet/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default LayoutPage;