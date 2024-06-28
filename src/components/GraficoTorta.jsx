import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Box } from '@chakra-ui/react';

const GraficoTorta = ({ percentages }) => {
  const data = {
    labels: percentages.map((_, index) => `Segment ${index + 1}`),
    datasets: [
      {
        data: percentages,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#9C27B0',
          '#FF9800',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#9C27B0',
          '#FF9800',
        ],
      },
    ],
  };

  return (
    <Box>
      <Pie data={data} />
    </Box>
  );
};

export default GraficoTorta;