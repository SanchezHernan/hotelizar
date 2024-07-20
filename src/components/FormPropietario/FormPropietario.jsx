import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react';
import React from 'react';
import { BiRename } from 'react-icons/bi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
import { GiDirectionSigns } from 'react-icons/gi';
import useForm from '../../hooks/useForm';
import CustomInputGroup from './CustomInputGroup';

const FormPropietario = () => {

    
  const { formData, cargando, handleChange, handleClick } = useForm({
    fullname_client: '',
    dni: '',
    direccion: '',
    phone_client: '',
  });

  return (
    <FormControl w="100%" maxW="350px" display="flex" flexDirection="column" alignItems="center" gap="15px">
      <Box w="100%">
        <Text textAlign="center" fontSize="30px" fontWeight="bold" color="#fff">Sé propietario</Text>
      </Box>
      <Box w="100%">
        <CustomInputGroup icon={<BiRename color='#fff' />} placeholder="Apellido y nombre" name="fullname_client" handleChange={handleChange} />
      </Box>
      <Box w="100%">
        <CustomInputGroup icon={<FaAddressCard color='#fff' />} placeholder="Nro de documento" name="dni" handleChange={handleChange} />
      </Box>
      <Box w="100%">
        <CustomInputGroup icon={<GiDirectionSigns color='#fff' />} placeholder="Dirección" name="direccion" handleChange={handleChange} />
      </Box>
      <Box w="100%">
        <InputGroup>
          <InputLeftAddon children='+54' />
          <Input
            type='number'
            w="100%"
            h="40px"
            variant='outline'
            placeholder="3446234312"
            color="#fff"
            sx={{ '::placeholder': { color: '#fff' } }}
            name="phone_client"
            onChange={handleChange}
            aria-label="Número de teléfono"
            id="phone_client"
          />
        </InputGroup>
      </Box>
      <Box w="100%">
        <Button w="100%" h="40px" rightIcon={<BsArrowRightCircle />} isLoading={cargando} onClick={handleClick} bg={cargando ? 'oscuro.100' : 'claro.100'} color={cargando ? '#1e1e1e' : '#fff'} variant='solid'>Ser propietario</Button>
      </Box>
    </FormControl>
  );
};

export default FormPropietario;
