 import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import { Navigate,Outlet } from 'react-router-dom';
 
const TestPrivateRoute = ({ element }) => {
    // Simulate authentication status, replace this with your actual authentication logic
    const  {isAuthenticated}=useGlobalContext();
  
    return isAuthenticated ?   <Outlet/>: <Navigate to="/login" />;
  };
  
  export default TestPrivateRoute;