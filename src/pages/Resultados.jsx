import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Volver from '../components/Volver'
import Filtros from '../components/Filtros'
import Card from '../components/Card'
import BtnMapa from '../components/BtnMapa'
import Mapa from '../components/Mapa';
import { useNavigate } from 'react-router-dom'


const Resultados = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure()

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
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" h="100vh">
        <Volver text="Resultados"/>
        
        <Box w="85%" mt="50px" maxW={["400px", "600px", "1250px"]} display="flex" flexDirection="column" alignItems="center" h="100vh">
          <Box w="100%" display={["flex", "none"]} justifyContent="center">
            <BtnMapa onOpen={onOpen}/>
          </Box>
          <Box w="100%" gap="20px" display="flex" flexDirection={["column", "column", "column"]}>
              <Box w="100%" display="flex" justifyContent="center" >
                <Filtros/>
              </Box>
              <Box w="100%" display="flex" flexDirection="row" justifyContent="space-between">
                <SimpleGrid spacing="10px" columns={[1, 2]} width={["100%","50%"]}>
                  {data && data.map((alojamiento, index) => (
                    <Card data={alojamiento} key={index} />
                  ))}
                </SimpleGrid>
                <Box display={["none", "flex"]} w="47.5%" h="100%">
                  <Mapa />
                </Box>
                
              </Box>
              
            </Box>
            
        </Box>
        <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent h="90%">
            <DrawerHeader borderBottomWidth='1px' textAlign="center">Mapa</DrawerHeader>
            <DrawerBody p="0" w="100vw" h="100vh">
                <Mapa navigate={navigate}/>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </Box>
  )
}

export default Resultados