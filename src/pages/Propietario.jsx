import { Box } from '@chakra-ui/react'
import React from 'react'
import FormPropietario from '../components/FormPropietario/FormPropietario';
import fondo from '../assets/img/fondo-propietario.jpg';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Navbar from '../components/Navbar';

const Propietario = () => {

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" h="100vh" backgroundImage={fondo} backgroundSize="cover" backgroundPosition="center">
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          background="rgba(0, 0, 0, 0.3)" // Fondo oscuro semitransparente
          zIndex="" // Colocar detrás del contenido
        ></Box>
        <Navbar title="Sé propietario"/>
        <Box  w="85%" maxW={["400px", "600px", "800px", "1200px"]} justifyContent="center" display="flex" flexDirection="column" alignItems="center" h="100vh">
            <Box w="100%" gap="20px" justifyContent="center" alignItems="center" display="flex" flexDirection={["column", "column", "column"]}>
                <FormPropietario />
            </Box>
        </Box>
    </Box>
  )
}

export default withAuthRedirect(Propietario);