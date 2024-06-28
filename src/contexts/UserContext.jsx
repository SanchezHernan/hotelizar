// post
// http://18.212.63.4:3000/api/v1/auth/login

// get clients:
// http://18.212.63.4:3000/api/v1/clients

// docs - ver en navegador
// http://18.212.63.4:3000/api/v1/docs#/


import React, { createContext, useState, useEffect } from 'react';
import { getTokenFromCookie, getUserById, parseJwt } from '../services/auth';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userRole, setUserRole] = useState('guest'); // Default value is 'guest'

  useEffect(() => {
    const fetchUserRole = async () => {
      const token = getTokenFromCookie();

      console.log('cookie token:', token);

      setAccessToken(token);

      if (token) {
        const payload = parseJwt(token);
        
        const userId = payload.id;
        if (userId) {
          try {
            const userData = await getUserById(userId);

            console.log(userData);
            
            setUserRole(userData.roles_client[0]);
          } catch (error) {
            console.error('Error fetching user role:', error);
          }
        }
      } else {
        setUserRole('guest');
      }
    };

    fetchUserRole();
  }, []);

  return (
    <UserContext.Provider value={{ accessToken, userRole }}>
      {children}
    </UserContext.Provider>
  );
};