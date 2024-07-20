import { Box } from '@chakra-ui/react'
import React from 'react';
import Mapa from '../components/Mapa';
import Navbar from '../components/Navbar';



const PageMapa = () => {
  return (
    <Box w="100vw" h="100vh">
      <Navbar title="Mapa" />
      <Mapa />
    </Box>
  )
}

export default PageMapa;