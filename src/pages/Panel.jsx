import React from 'react'
import Volver from '../components/Volver'
import { Box, SimpleGrid } from '@chakra-ui/react'
import Estadisticas from '../components/Estadisticas'
import GraficoTorta from '../components/GraficoTorta'

const Panel = () => {
  const estadisticas_data = [
      {
        "titulo": "Visitas",
        "subtitulos": [
          {"nombre": "Hoy", "valor": 150},
          {"nombre": "Semanas", "valor": 1200},
          {"nombre": "Mes", "valor": 5000}
        ],
        "fondo":"claro.100",
        "letra":"#fff"
      },
      {
        "titulo": "Reservas",
        "subtitulos": [
          {"nombre": "Hoy", "valor": 20},
          {"nombre": "Semanas", "valor": 150},
          {"nombre": "Mes", "valor": 500}
        ],
        "fondo":"oscuro.100",
        "letra":"#fff"
      },
      {
        "titulo": "Registros",
        "subtitulos": [
          {"nombre": "Hoy", "valor": 50},
          {"nombre": "Total", "valor": 200}
        ],
        "fondo":"claro.100",
        "letra":"#fff"
      },
      {
        "titulo": "Alojamientos",
        "subtitulos": [
          {"nombre": "Total", "valor": 100},
          {"nombre": "Reservados", "valor": 30}
        ],
        "fondo":"oscuro.100",
        "letra":"#fff"
      }
    ]
  

  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" h="100vh">
    <Volver text="Estadisticas" />
    <Box w="85%" mt="50px" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column" alignItems="center" h="100vh">
      <SimpleGrid columns={[1, 2]} spacing={["0","20px"]} width="100%">
        {estadisticas_data.map((estadistica, index) => (
          <Estadisticas key={index} estadistica={estadistica} />
        ))}
      </SimpleGrid>
    </Box>
  </Box>
        
  )
}

export default Panel;