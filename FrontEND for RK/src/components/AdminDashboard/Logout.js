import React from 'react';
import { useGlobalContext } from '../../context/context';
import { removeAuthToken } from '../Auth';

export default function Logout() {
  const { isAuthenticated, setisAuthenticated } = useGlobalContext();

  // Handle the logout functionality
  const handleLogout = () => {
    setisAuthenticated(false);
    removeAuthToken();
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
}
