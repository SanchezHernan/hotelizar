import React, { useContext } from 'react'
import Volver from '../components/Volver'
import { Box, Button, Select, SimpleGrid, Text } from '@chakra-ui/react'
import Estadisticas from '../components/Estadisticas'
import GraficoTorta from '../components/GraficoTorta'
import { UserContext } from '../contexts/UserContext'

const Panel = () => {

  const { userRole, setUserRole } = useContext(UserContext);

  const admin_estadisticas = [
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
      "titulo": "Usuarios",
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
    },
    {
      "titulo": "Ingresos Generados",
      "subtitulos": [
        {"nombre": "Este mes", "valor": 15000},
        {"nombre": "Total", "valor": 120000}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    },
  ];

  const user_estadisticas = [
    {
      "titulo": "Tus Visitas",
      "subtitulos": [
        {"nombre": "Hoy", "valor": 10},
        {"nombre": "Semanas", "valor": 50},
        {"nombre": "Mes", "valor": 200}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    },
    {
      "titulo": "Tus Reservas",
      "subtitulos": [
        {"nombre": "Hoy", "valor": 1},
        {"nombre": "Semanas", "valor": 5},
        {"nombre": "Mes", "valor": 20}
      ],
      "fondo":"oscuro.100",
      "letra":"#fff"
    }
  ];

  const guest_estadisticas = [
    {
      "titulo": "Información General",
      "subtitulos": [
        {"nombre": "Visitas Diarias", "valor": 100},
        {"nombre": "Reservas Mensuales", "valor": 300}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    },
    {
      "titulo": "Últimas valoraciones",
      "subtitulos": [
        {"nombre": "Excelente Servicio", "valor": 5},
        {"nombre": "Muy Bueno", "valor": 4},
        {"nombre": "Regular", "valor": 3}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    },
    {
      "titulo": "Alojamientos en Oferta",
      "subtitulos": [
        {"nombre": "Visitas Diarias", "valor": 100},
        {"nombre": "Reservas Mensuales", "valor": 300}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    }
  ];

  const host_estadisticas = [
    {
      "titulo": "Nivel de Ocupación",
      "subtitulos": [
        {"nombre": "Actual", "valor": 100},
        {"nombre": "Este Mes", "valor": 300}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    },
    {
      "titulo": "Ingresos Generados",
      "subtitulos": [
        {"nombre": "Último mes", "valor": 400},
        {"nombre": "Total", "valor": 1400}
      ],
      "fondo":"oscuro.100",
      "letra":"#fff"
    },
    {
      "titulo": "Reseñas recientes",
      "subtitulos": [
        {"nombre": "Valoración 1", "valor": 5},
        {"nombre": "Valoración 2", "valor": 4}
      ],
      "fondo":"claro.100",
      "letra":"#fff"
    },
    {
      "titulo": "Cancelaciones recientes",
      "subtitulos": [
        {"nombre": "Esta semana", "valor": 8},
        {"nombre": "Este mes", "valor": 18}
      ],
      "fondo":"oscuro.100",
      "letra":"#fff"
    }
  ];
  
  const getEstadisticas = () => {
    switch(userRole) {
      case 'admin':
        return admin_estadisticas;
      case 'user':
        return user_estadisticas;
      case 'host':
        return host_estadisticas;
      case 'guest':
      default:
        return guest_estadisticas;
    }
  };

  const estadisticas_data = getEstadisticas();

  const getUserMessage = () => {
    switch(userRole) {
      case 'admin':
        return 'Administrador';
      case 'user':
        return 'Usuario';
      case 'host':
        return 'Propietario';
      case 'guest':
      default:
        return 'Invitado';
    }
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };


  return (
    <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center">
      <Volver text="Estadisticas" />
      <Text fontSize="xl" mt="50px">{getUserMessage()}</Text> {/* Mensaje basado en userRole */}
      <Box w="85%" mt="20px" maxW={["400px", "600px", "800px"]}
        display="flex" flexDirection="column" alignItems="center"
        h="100vh" overflowY="auto"
      >
        <SimpleGrid columns={[1, 2]} spacing={["0","20px"]} width="100%">
          {estadisticas_data.map((estadistica, index) => (
            <Estadisticas key={index} estadistica={estadistica} />
          ))}
        </SimpleGrid>   
      </Box>
      <Select mt="20px" value={userRole} onChange={handleRoleChange}>
        <option value="guest">Invitado</option>
        <option value="user">Usuario</option>
        <option value="host">Propietario</option>
        <option value="admin">Administrador</option>
      </Select>
    </Box>
  )
}

export default Panel;