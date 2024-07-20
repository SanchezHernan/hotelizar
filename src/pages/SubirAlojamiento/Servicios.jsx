import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import pileta from '../../assets/img/servicios/pileta.png';
import billar from '../../assets/img/servicios/billar.png';
import chimenea from '../../assets/img/servicios/chimenea.png';
import comer_afuera from '../../assets/img/servicios/comer_afuera.png';
import fogata from '../../assets/img/servicios/fogata.png';
import gimnasio from '../../assets/img/servicios/gimnasio.png';
import jacuzzi from '../../assets/img/servicios/jacuzzi.png';
import parrilla from '../../assets/img/servicios/parrilla.png';
import patio from '../../assets/img/servicios/patio.png';
import piano from '../../assets/img/servicios/piano.png';

const Servicios = ({ servicios }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceClick = (servicio) => {
    const isSelected = selectedServices.some((selectedService) => selectedService.nombre === servicio.nombre);
    if (isSelected) {
      const updatedSelection = selectedServices.filter((selectedService) => selectedService.nombre !== servicio.nombre);
      setSelectedServices(updatedSelection);
    } else {
      setSelectedServices([...selectedServices, servicio]);
    }
  };

  const iconos = {
    pileta,
    billar,
    chimenea,
    comer_afuera,
    fogata,
    gimnasio,
    jacuzzi,
    parrilla,
    patio,
    piano
  };

  return (
    <SimpleGrid columns={[2,3]} spacing="10px" w="100%">
      {servicios.map((servicio, index) => (
        <Card
          key={index}
          bg={selectedServices.some((selectedService) => selectedService.nombre === servicio.nombre) ? '#eee' : 'transparent'}
          border={selectedServices.some((selectedService) => selectedService.nombre === servicio.nombre) ? '1px solid #1e1e1e' : '1px solid transparent'}
          cursor="pointer"
          onClick={() => handleServiceClick(servicio)}
        >
          <CardHeader pb="10px">
            <Heading size="sm">
              <Image w="40px" src={iconos[servicio.icon]} />
            </Heading>
          </CardHeader>
          <CardBody pt="0">
            <Text fontWeight="600">{servicio.nombre}</Text>
          </CardBody>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default Servicios;
