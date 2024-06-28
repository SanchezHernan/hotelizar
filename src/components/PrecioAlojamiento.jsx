import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const PrecioAlojamiento = ({precio}) => {
  return (
    <Box w="auto" h="35px" p="5px" bg="#fff" color="#1e1e1e" borderRadius="10px" display="flex" justifyContent="center" alignItems="center" border="1px solid #1e1e1e">
        <Text fontSize="15px" fontWeight="600">${precio} USD</Text>
    </Box>
  )
}

export default PrecioAlojamiento