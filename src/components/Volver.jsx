import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Volver = ({ text }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navega a la página anterior sin recargar
  };

  return (
    <Box position="fixed" zIndex="10" bg="#fff" w="100%" p="10px 0" h="40px !important" display="flex" justifyContent="center" flexDirection="row" alignItems="center" boxShadow="-4px 7px 21px 0px rgba(112,112,112,0.5)">
      <Box w="85%" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="row" alignItems="center">
        <MdOutlineKeyboardArrowLeft cursor="pointer" fontSize="30px" onClick={handleBack} />
        <Text w="100%" fontWeight="bold" textAlign="center">{text}</Text>
      </Box>
    </Box>
  );
};

export default Volver;
