import React from 'react'
import { NavLink } from 'react-router-dom' 
import { Layout } from 'antd'

import RKlogo from '../ICONS/RK.png'


const {Header }=Layout

const Navbarheader = () => {
  return (
    <Header style={{
        padding: 0, margin: 0,
         backgroundColor:'white'
         }}>
        
               
       
                 <div className="container-textbox"  style={{
                   width: '100%',
                   display:'flex',
                   position:'sticky',
                   justifyContent:'space-between', 
                   boxShadow:'0px 2px 5px rgba(0, 0, 0, 0.1)',
                   backdropFilter:'blur(5px)',
                   paddingRight:'30px'
                    
                   
                 }}>
       
                   <div className='container-s'>
                      <img src={RKlogo} alt='Icon' className='icon' style={{width: '200px', height:'100px', alignItems:'center',fontSize:'55px'}}/> 
                  </div>
       
                    
                  <ul className="nav-menu">
                     <li className="nav-item">
                       <NavLink exact="true" to="/" className="nav-links">
                         Home
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink exact="true" to="/about" className="nav-links">
                         About
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink exact="true" to="/Register" className="nav-links">
                         Register
                       </NavLink>
                     </li>
                     <li className="nav-item">
                       <NavLink exact="true" to="/login" className="nav-links">
                         Login
                       </NavLink>
                     </li>
                   </ul>
                    
                 </div>
                
              
        </Header>
  )
}

export default Navbarheader
