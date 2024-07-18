import { Box } from '@chakra-ui/react'
import React from 'react';
import Mapa from '../components/Mapa';
import Volver from '../components/Volver';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const handleClick = () => {
  window.history.go(-1);
};

const PageMapa = () => {
  return (
    <Box w="100vw" h="100vh">
      {/* <Box w="100%" h="40px" display="flex" alignItems="center" justifyContent="center" bg="rgba(0, 0, 0, 0.3)" position="fixed" zIndex="1" top="0" >
          <Box w="90%">
              <MdOutlineKeyboardArrowLeft color="#fff" fontSize="30px" onClick={handleClick}/>
          </Box>
      </Box> */}
      <Volver text="Mapa" />
      <Mapa />
    </Box>
  )
}

export default PageMapa;