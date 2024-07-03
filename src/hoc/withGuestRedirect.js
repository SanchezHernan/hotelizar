import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const withGuestRedirect = (WrappedComponent) => {
  return (props) => {
    const { userRole } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
      document.cookie = "rolUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      if (userRole !== 'guest') {
        navigate('/');
      }
    }, [userRole, navigate]);

    return <WrappedComponent {...props} />;
  };
};

export default withGuestRedirect;
