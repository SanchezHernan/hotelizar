import { Box, Spinner, Text } from '@chakra-ui/react'
import CardAlojamiento from '../components/CardAlojamiento';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { getRentalById } from '../services/rental';

const Alojamiento = () => {

  const {id} = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const jsonData = await getRentalById(id);
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <Box w="100%" h="100vh" display="flex" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Box>
    );
  } else {
    
    return (
      <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center">
          <Box w="100%" gap="20px" display="flex" flexDirection="column">
            {error && <Text color="red.500">Error: {error.message}</Text>}
            {data && <CardAlojamiento data={data}/>}
          </Box>
      </Box>
    )
  }

}

export default Alojamiento