import { Menu ,Card, Space, Avatar,Button } from 'antd'
 
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  SettingOutlined,
  DollarCircleOutlined,
  LoginOutlined
} from "@ant-design/icons";
import React from 'react'
import   { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context/context';
import Guestlist from './Guestlist';
import Item from 'antd/es/list/Item';
import { useNavigate,useLocation } from 'react-router-dom';
import { ListOutlined } from '@mui/icons-material'; 

const SideBar = ({ setActivePage, activePage }) => {
  const location = useLocation();
  const navigate=useNavigate();
  const { isAuthenticated } = useGlobalContext();
  

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  


  const handleMenuClick = (item) => {
    setActivePage(item.key);
    navigate(`/dashboard/${item.key}`);
  };

  const handleToggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
<div className={`Side-Bar ${isSidebarCollapsed ? 'collapsed' : ''}`}>

<Button onClick={handleToggleSidebar}>
        {isSidebarCollapsed ? 'Expand' : 'Collapse'}
      </Button>


      <Menu onClick={handleMenuClick}  mode="inline" selectedKeys={[activePage]}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px',padding:'20px' }}>
               
              <Avatar size={104} icon={<UserOutlined />} />
            </div>
        <Menu.Item key="contentdashboard" icon={<AppstoreOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="guestlist" icon={<ListOutlined />}>
          GuestList
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="settings" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item key="feedue" icon={<AppstoreOutlined />}>
        Due Dates
        </Menu.Item>
        <Menu.Item key="Logout" icon={<LoginOutlined />}>
        Logout
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default SideBar
