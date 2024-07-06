// src/components/auth/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';  // Ajuste aquí

const ProtectedRoute = ({ children, isAdminRoute = false }) => {
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
      const { exp, role } = jwtDecode(token);
      if (exp < new Date().getTime() / 1000) {
        return false;
      }
      if (isAdminRoute && role !== 'admin') {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  };

  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
