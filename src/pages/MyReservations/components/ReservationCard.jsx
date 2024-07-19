// ReservationCard.js
import React from 'react';
import { Text, Image, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ReservationCard = ({ reservation }) => (
  <LinkBox as="article" borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
    <Card>
      <Flex>
        <Image src={reservation.image} alt={reservation.title} boxSize="100px" objectFit="cover" />
        <CardBody>
          <Text fontWeight="bold" fontSize="xl" mb={2}>
            <LinkOverlay as={Link} to={`/alojamiento/${reservation.id}`}>
              {reservation.title}
            </LinkOverlay>
          </Text>
          <Text fontSize="md">
            {reservation.location}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {reservation.checkIn} - {reservation.checkOut}
          </Text>
        </CardBody>
      </Flex>
      <CardFooter>
        <Text fontSize="lg" color="green.500">
          {reservation.price}
        </Text>
      </CardFooter>
    </Card>
  </LinkBox>
);

export default ReservationCard;
