import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Card from './Card'

const Destacados = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://18.212.63.4:3000/api/v1/rentals');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
    <Box w="100%">
      <Text fontWeight="bold">Destacados</Text>
    </Box>
    <SimpleGrid columns={[1, 2,3]} spacing="20px" width="100%">
      {data && data.map((alojamiento, index) => (
        <Card data={alojamiento} key={index} />
      ))}
    </SimpleGrid>
  </Box>
  )
}

export default Destacados