import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const ProtectedRoute = ({ children }) => {
  const { userRole } = useContext(UserContext);
  const location = useLocation();

  // Redirigir a "/login" si el usuario es "guest" y está intentando acceder a una ruta protegida
  if (userRole === 'guest' && (location.pathname === '/subir-alojamiento' || location.pathname === '/propietario')) {
    console.log(userRole);
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Redirigir a "/" si el usuario autenticado está intentando acceder a "/login" o "/registro"
  if (userRole !== 'guest' && (location.pathname === '/login' || location.pathname === '/registro')) {
    return <Navigate to="/" replace />;
  }

  // Permitir acceso a otras rutas protegidas
  return children;
};

export default ProtectedRoute;
