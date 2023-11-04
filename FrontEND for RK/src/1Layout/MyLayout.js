import React from 'react'
import Navbarheader from './Navbarheader';
import NavFooter from './NavFooter';
import { Content } from 'antd/es/layout/layout';
 

const MyLayout = (props) => {
  return (
      <div  >
        <Navbarheader/>
        <Content>{props.children}</Content>
        <NavFooter/>
      </div>
  )
}

export default MyLayout
