import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const Contador = ({ label, count, setCount }) => {

    const increment = () => {
        setCount(count + 1);
      };
    
      const decrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };

  return (
    <Box >
      <Text fontWeight="500"> {label}: {count} </Text>
      <Button w="20px" h="40px" bg="claro.100" mr={2} onClick={decrement}>
        -
      </Button>
      <Button w="20px" h="40px" bg="claroTransp.100"  onClick={increment}>
        +
      </Button>
    </Box>
  )
}

export default Contador