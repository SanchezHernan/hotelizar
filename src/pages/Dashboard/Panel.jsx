import React, { useContext } from 'react'
import Volver from '../../components/Volver'
import { Box, Select, SimpleGrid, Text } from '@chakra-ui/react'
import Estadisticas from './components/Estadisticas'
import LineChart from './components/LineChart'
import PieChart from './components/PieChart'
import { UserContext } from '../../contexts/UserContext'

// Configuración de gráficos
const lineChartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  datasets: [
    {
      label: 'Ingresos',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,191,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 2,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 45, 51]
    }
  ]
};

const lineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: ''
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Mil'
      }
    }
  }
};

const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

const pieChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      enabled: true,
    },
  },
};

// Datos de estadísticas
const adminEstadisticas = [
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
];

const userEstadisticas = [
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

const guestEstadisticas = [
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
    "fondo":"oscuro.100",
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

const hostEstadisticas = [
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
    "titulo": "Cancelaciones recientes",
    "subtitulos": [
      {"nombre": "Esta semana", "valor": 8},
      {"nombre": "Este mes", "valor": 18}
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
  }
];


const Panel = () => {
  const { userRole, setUserRole } = useContext(UserContext);

  const estadisticasData = {
    admin: adminEstadisticas,
    user: userEstadisticas,
    host: hostEstadisticas,
    guest: guestEstadisticas,
  }[userRole];

  const userMessages = {
    admin: 'Administrador',
    user: 'Usuario',
    host: 'Propietario',
    guest: 'Invitado',
  };


  return (
    <Box w="100%" h="100vh" display="flex" flexDirection="column" alignItems="center">
      <Volver text="Estadisticas" />
      <Text fontSize="xl" mt="50px">{userMessages[userRole]}</Text> {/* Mensaje basado en userRole */}
      <Box w="85%" mt="20px" maxW={["400px", "600px", "800px"]}
        display="flex" flexDirection="column" alignItems="center"
        h="100vh" overflowY="auto"
      >
        <SimpleGrid columns={[1, 2]} spacing={["0","20px"]} width="100%">
          { (userRole === 'host' || userRole === 'admin') &&
            <LineChart data={lineChartData} options={lineChartOptions} />
          }
          {estadisticasData.map((estadistica, index) => (
            <Estadisticas key={index} estadistica={estadistica} />
          ))}
          {userRole === 'user' &&
            <PieChart data={pieChartData} options={pieChartOptions} />
          }
        </SimpleGrid>   
      </Box>
      <Select mt="20px" value={userRole} onChange={(e) => setUserRole(e.target.value)}>
        <option value="guest">Invitado</option>
        <option value="user">Usuario</option>
        <option value="host">Propietario</option>
        <option value="admin">Administrador</option>
      </Select>
    </Box>
  )
}

export default Panel;