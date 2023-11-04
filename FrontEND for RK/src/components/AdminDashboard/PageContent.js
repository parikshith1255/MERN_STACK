  import React from 'react'
  import '../AdminDashboard/Admin.css'
  import { useGlobalContext } from '../../context/context';
  import Settings from './Settings';
  import {    useLocation ,Outlet } from 'react-router-dom';
  import ContentDashboard from './ContentDashboard';
  import GuestDetails from './GuestDetails';
  import { useState } from 'react';

  
  

  const PageContent = ({showGuestDetails,setShowGuestDetails}) => {
    const location = useLocation();
    

    const selectedOption = location.pathname.split('/')[2];
    
    // Add the GuestDetails component to be rendered conditionally when user clicks on Aadhar number

    return  <div className='Page-Content'>
      
     
  </div>
    
  };
  

  export default PageContent
