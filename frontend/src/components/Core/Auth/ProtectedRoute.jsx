import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { accessToken } = useSelector(state => state.auth);
  
    if (accessToken !== null) {
      return children;
    }
  
    return <Navigate to='/login' />;
  };
  

export default ProtectedRoute