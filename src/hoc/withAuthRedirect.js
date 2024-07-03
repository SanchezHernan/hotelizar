import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

const withAuthRedirect = (WrappedComponent) => {
  return (props) => {
    const { userRole } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      if (userRole === 'guest') {
        navigate('/login', { state: { from: location } });
      }
    }, [userRole, navigate, location]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuthRedirect;
