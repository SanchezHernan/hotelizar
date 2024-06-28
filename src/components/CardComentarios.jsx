import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react';
import perfil from '../assets/img/perfil.png'

const CardComentarios = () => {
  return (
    <Box mt="15px" display="flex" flexDirection="column" w="100%" gap="5px">
        <Box display="flex" flexDirection="row" w="100%" gap="10px">
            <Box>
                <Image src={perfil} w="45px" h="45px"/>
            </Box>
            <Box display="flex" flexDirection="column">
                <Text fontWeight="bold">Nombre de la persona</Text>
                <Text color="rgb(0,0,0,0.5)">15 de Febrero, 2023</Text>
            </Box>
        </Box>
        <Box w="100%" maxH="4.5em" overflow="hidden" textOverflow="ellipsis" whiteSpace="pre-line">
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, hic. Culpa corporis ad nostrum dignissimos. Perspiciatis enim voluptatibus et excepturi adipisci ipsum voluptates delectus mollitia vero molestiae, dolor maiores rerum.</Text>
        </Box>
        <Box w="100%" textAlign="right">
            <Text textDecoration="underline">Ver más</Text>
        </Box>
    </Box>
  )
}

export default CardComentarios