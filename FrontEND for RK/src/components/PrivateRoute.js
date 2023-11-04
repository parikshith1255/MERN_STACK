import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
 

 
 
import { useGlobalContext,AppContext } from '../context/context';

const PrivateRoute = ({ element }) => {
  const{ isAuthenticated
}=useGlobalContext()
   
return isAuthenticated ? (element): <Navigate to="/login" />;
};

export default PrivateRoute;
