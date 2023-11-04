import React from 'react';
 
import Navbarheader from './Navbarheader';
import NavFooter from './NavFooter';



function Layout(props) {
  return (
    <div className="layout">
      <Navbarheader />
      {props.children}
      <NavFooter />
    </div>
  );
}

 

   

export default Layout;
