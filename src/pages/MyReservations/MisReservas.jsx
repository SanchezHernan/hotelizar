import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react';
import ReservationCard from './components/ReservationCard';
import Volver from '../../components/Volver';
import foto from '../../assets/img/foto.jpg'
import Navbar from '../../components/Navbar';

const reservations = {
  current: [
    {
      id: 1,
      title: 'Alojamiento en la playa',
      image: foto,
      checkIn: '2024-07-20',
      checkOut: '2024-07-25',
      location: 'Playa del Carmen, México',
      price: '100 USD/noche',
    },
    // Más reservas actuales...
  ],
  previous: [
    {
      id: 2,
      title: 'Cabaña en la montaña',
      image: foto,
      checkIn: '2024-06-10',
      checkOut: '2024-06-15',
      location: 'Bariloche, Argentina',
      price: '80 USD/noche',
    },
    {
      id: 3,
      title: 'Design house in the City Center',
      image: foto,
      checkIn: '2024-07-20',
      checkOut: '2024-07-25',
      location: '9 de Julio 1523, Argentina',
      price: '60 USD/noche',
    },
    // Más reservas anteriores...
  ],
};


const MisReservas = () => (
  <>
    <Navbar title="Mis Reservas" />
    <Box p={4}>
      <Text fontSize="1.5rem" fontWeight="bold" mb={2} mt="60px">
        Reservas Actuales
      </Text>
      <Stack spacing={4}>
        {reservations.current.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </Stack>
      <Text fontSize="1.5rem" fontWeight="bold" mt={8} mb={2}>
        Reservas Anteriores
      </Text>
      <Stack spacing={4}>
        {reservations.previous.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </Stack>
    </Box>
  </>
);

export default MisReservas;