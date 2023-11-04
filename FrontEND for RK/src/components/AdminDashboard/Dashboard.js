import React, { useState,useEffect } from 'react';
import Guestlist from './Guestlist';
import Logout from './Logout';
import AdminProfile from './AdminProfile';
import { useNavigate,useLocation } from 'react-router-dom';

import { FindGuest } from '../Auth';
import { useGlobalContext } from '../../context/context';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
 
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Settings from './Settings';
 
import ContentDashboard from './ContentDashboard';
import GuestDetails from './GuestDetails';
import FeeChecking from './FeeChecking';
import FeePayment from './FeePayment';
import Rooms from './Rooms';
const { Header, Content, Footer, Sider } = Layout;
 
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate=useNavigate();

   
  const [activePage, setActivePage] = useState(null); 
  

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderContent = () => {
    switch (activePage) {
      case 'guestlist':
        return  <Guestlist  setActivePage={setActivePage} />;
      case 'settings':
        return <Settings />;
        case 'contentdashboard':
          return <ContentDashboard />;
          case 'Logout':
          return <Logout />;
          case 'profile':
          return <AdminProfile />;
          case 'guestdetails':
          return <GuestDetails />;
          case 'Fee_Dues':
          return <FeeChecking />;
          case 'FeePayment':
          return <FeePayment />;
          case 'Rooms':
          return <Rooms/>;
      default:
        return <ContentDashboard />;
    }
  };

  const handleMenuClick = (item) => {
    // Handle the menu item click and set activePage state
    try {
      setActivePage(item.key);
      navigate(`/fee/${item.key}`);
      console.log(activePage)
    } catch(error) {
       console.log(error)
    }
     
  };

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark"  onClick={handleMenuClick}    mode="inline">
        <Menu.Item key="contentdashboard" icon={<DesktopOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="guestlist" icon={<FileOutlined />}>
          GuestList
        </Menu.Item>
        <Menu.Item key="profile" icon={<PieChartOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="Rooms" icon={<PieChartOutlined />}>
          Rooms
        </Menu.Item>
        <Menu.Item key="settings" icon={<PieChartOutlined />}>
          Settings
        </Menu.Item>
        <Menu.SubMenu key="feeSubMenu" icon={<UserOutlined />} title="FEE"> {/* Sub-menu for FEE section */}
        <Menu.Item key="Fee_Dues"  >FEE DUES</Menu.Item>

        <Menu.Item key="FeePayment"  >FEE Payment</Menu.Item>
        {/* Add more menu items for the sub-menu if needed */}
      </Menu.SubMenu>
        <Menu.Item key="Logout" icon={<UserOutlined />}>
        Logout
        </Menu.Item>
        </Menu>
      </Sider>



      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />


        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
             
          </Breadcrumb>
           
           
       
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
          {renderContent()}
          </div>
        
        </Content>



        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>

     </Layout>



    </Layout>
  );
};
export default Dashboard;