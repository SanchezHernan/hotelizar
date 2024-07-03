import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiRename } from 'react-icons/bi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa';
import { GiDirectionSigns } from 'react-icons/gi';

const FormPropietario = () => {

    const [formData, setFormData] = useState({
        fullname_client: '',
        dni: '',
        direccion: '',
        phone_client: '',
    });
    const [cargando, setCargando] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleClick = async() =>{
        setCargando(true);
        const timeoutId = setTimeout(() => {
            setCargando(false);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }


  return (
    <FormControl w="100%" maxW="350px" display="flex" flexDirection="column" alignItems="center" gap="15px">
        <Box w="100%">
            <Text textAlign="center" fontSize="30px" fontWeight="bold" color="#fff">Sé propietario</Text>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<BiRename color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                    placeholder="Apellido y nombre"
                    onChange={handleChange} name="fullname_client"
                    aria-label="Apellido y nombre"
                    id="fullname_client"
                />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<FaAddressCard color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                    placeholder="Nro de documento"
                    onChange={handleChange} name="dni"
                    aria-label="Nro de documento"
                    id="dni"
                />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<GiDirectionSigns color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                    placeholder="Dirección"
                    onChange={handleChange} name="direccion"
                    aria-label="Dirección"
                    id="direccion"
                />
            </InputGroup>
        </Box>
        <Box w="100%">
                <InputGroup>
                    <InputLeftAddon children='+54'/>
                    <Input 
                        type='number' 
                        w="100%" 
                        h="40px" 
                        variant='outline' 
                        placeholder="3446234312" 
                        color="#fff" 
                        sx={{ '::placeholder': { color: '#fff'},}} 
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
  )
}

export default FormPropietario