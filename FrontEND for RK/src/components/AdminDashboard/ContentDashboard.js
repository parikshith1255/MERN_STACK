import { ShoppingCartCheckoutOutlined } from '@mui/icons-material'
 import React from 'react'
 import { useGlobalContext } from '../../context/context';
import {
    DollarCircleOutlined,
    ShoppingCartOutlined,
    ShoppingOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Card, Space, Statistic, Table, Typography } from "antd";


const ContentDashboard = () => {
  const {list,feeDueCount}=useGlobalContext();
  const TotalGuest=list.length;
  
   
  return (
    <div className='content-dashboard ' style={{
       
      backgroundColor:'rgba(255, 255, 255, 0.55)'
    }}>
        <Typography.Title>Dashboard</Typography.Title>
        <Space direction='horizontal'>
          <DashboardCards icon={<ShoppingCartOutlined style={{color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,}}/>} title={"Guests"} value={ TotalGuest
                
                }/>
          <DashboardCards icon={<DollarCircleOutlined style={{
            color: "blue",
            backgroundColor: "rgba(0,0,255,0.25)",
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          }}/>} title={"Fee Dues"} value={ 123}/>

          <DashboardCards icon={<UserOutlined style={{
                      color: "purple",
                      backgroundColor: "rgba(0,255,255,0.25)",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,

          }}/>} title={"Today-Joinings"} value={12345}/>
          <DashboardCards icon={<ShoppingCartOutlined style={{
            color: "red",
            backgroundColor: "rgba(255,0,0,0.25)",
            borderRadius: 20,
            fontSize: 24,
            padding: 8,
          }}/>} title={"New-Joinings"} value={12345}/>  
        </Space>
      
    </div>
  )
}
function DashboardCards({title,value,icon}){
    return<Card>
    <Space direction='horizontal'>
        {icon}
         
        <Statistic title={title} value={value}/>
        </Space>
    </Card>
}
export default ContentDashboard
