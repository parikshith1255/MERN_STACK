import React from 'react'
import {
    TwitterCircleFilled,
    FacebookOutlined ,
   InstagramOutlined  
    
 } from '@ant-design/icons';
 import{Layout} from 'antd'

 const {Footer}=Layout

const NavFooter = () => {
  return (
    <Footer class="text-center text-lg-start bg-light " style={{
        marginLeft:'0px',
        marginBottom:'0px',
        color:'black',
       
        
        
      }}> 
       
       
      
      
          <div className='footer-logo' style={{ 
            display:'flex',
            paddingBottom:'10px',
           justifyContent:'space-around',
           boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.1)',
           WebkitBackdropFilter:'blur(5px)',
           backgroundColor:'white'
      
          }}>
            <div className='logo-footer'><TwitterCircleFilled    /></div>
            <div className='logo-footer'><FacebookOutlined /></div>
            <div className='logo-footer'><InstagramOutlined /></div>
            <div className='logo-footer'><InstagramOutlined /></div>
          </div>
      
      
         
         
      </Footer>
  )
}

export default NavFooter
