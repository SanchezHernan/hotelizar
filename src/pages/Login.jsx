import { Box } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import FormLogin from '../components/FormLogin';
import fondo from '../assets/img/fondo_login.jpg'
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const { userRole } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(()=>{
    document.cookie = "rolUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    if (userRole !== 'guest') {
      navigate('/');
    }
  }, [userRole]);


  return (
    <Box w="100%" backgroundImage={fondo} backgroundSize="cover" backgroundPosition="center" width={["100vw", "100vw", "99vw"]} height="100vh" display="flex" flexDirection="column" alignItems="center" h="100vh" justifyContent="center">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="rgba(0, 0, 0, 0.3)" // Fondo oscuro semitransparente
          zIndex="" // Colocar detrás del contenido
        ></Box>
        <Box w="85%" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column" justifyContent="center" alignItems="center" h="100vh">
            <Box w="100%" gap="20px" display="flex" justifyContent="center" alignItems="center" flexDirection={["column", "column", "row"]}>
                <FormLogin/>
            </Box>
        </Box>
    </Box>
  )
}

export default Login