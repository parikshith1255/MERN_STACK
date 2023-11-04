import { BellFilled, MailOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography } from "antd";
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='Dashboard-Header'>

       <Image></Image>
       <Typography.Title>Admin Dashboard</Typography.Title>
       <Space>
        <Badge count={10} dot>
          <BellFilled style={{fontSize:24}}/>
       </Badge>
       <Badge count={20} do><MailOutlined style={{fontSize:24}}/></Badge>

       </Space>
    </div>
  )
}

export default DashboardHeader
