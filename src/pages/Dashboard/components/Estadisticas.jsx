import { Box, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, Text } from '@chakra-ui/react'
import React from 'react'

const Estadisticas = ({estadistica}) => {

  return (
    <Box w="100%" h="155px" maxW="400px">
        <Text fontWeight="bold">{estadistica.titulo}</Text>
        <Box w="100%" h="125px" bg={estadistica.fondo} borderRadius="5px" color={estadistica.letra}>
            <StatGroup w="100%" h="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="row">
                <Stat display="flex" flexDirection="column" alignItems="center">
                    <StatLabel>{estadistica.subtitulos[0].nombre}</StatLabel>
                    <StatNumber fontSize="30px">{estadistica.subtitulos[0].valor}</StatNumber>
                    <StatHelpText display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                        <StatArrow type='increase' /> 
                        <Text fontWeight="600" w="100%" fontSize="16px">23.30%</Text>
                    </StatHelpText>
                </Stat>

                <Stat display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                    <StatLabel>{estadistica.subtitulos[1].nombre}</StatLabel>
                    <StatNumber fontSize="30px">{estadistica.subtitulos[1].valor}</StatNumber>
                    <StatHelpText display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                        <StatArrow type='increase' /> 
                        <Text fontWeight="600" fontSize="16px">9.05%</Text>
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </Box>
    </Box>
    
  )
}

export default Estadisticas