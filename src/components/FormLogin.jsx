import { Box, Button, FormControl, Input, InputGroup, InputLeftElement, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
// import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { login, getUserById } from '../services/auth';


const FormLogin = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [cargando, setCargando] = useState(false);
    const [formData, setFormData] = useState({
        correo: '',
        contra: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // getUserById movido al servicio auth

      const handleClick = async () => {
        setCargando(true);
        document.cookie = "rolUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        try {
          let inicio = await login(formData.correo, formData.contra);
          console.log('Login response:', inicio);
    
          if (inicio && !inicio.error) {
            const idClient = inicio.data.data.id_client;
    
            if (idClient) {
              const dataUser = await getUserById(idClient);
              console.log('data user:', dataUser);
              setCargando(false);
              if (dataUser && dataUser.roles_client[0] === 'admin') {
                navigate('/panel');
              } else {
                navigate('/');
              }
            } else {
              throw new Error('ID de cliente no encontrado');
            }
    
          } else {
            throw new Error(inicio.error || "Los datos ingresados no son correctos");
          }
        } catch (error) {
          setCargando(false);
          toast({
            title: 'Error',
            description: error.message,
            status: 'error',
            duration: 3000,
            isClosable: true,
          });
        }
      };

    return (
        <FormControl w="100%" maxW="350px" display="flex" flexDirection="column" alignItems="center" gap="15px">
          <Box w="100%">
            <Text textAlign="center" fontSize="30px" fontWeight="bold" color="#fff">Iniciar sesión</Text>
          </Box>
          <Box w="100%">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineAlternateEmail color='#fff' />}
              />
              <Input id="email-input" color="#fff" sx={{ '::placeholder': { color: '#fff' }, }}
                placeholder="Correo electrónico"
                onChange={handleChange} name="correo"
              />
            </InputGroup>
          </Box>
          <Box w="100%">
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<RiLockPasswordLine color='#fff' />}
              />
              <Input id="password-input" color="#fff" sx={{ '::placeholder': { color: '#fff' }, }}
                placeholder="Contraseña"
                onChange={handleChange} name="contra" type='password'
              />
            </InputGroup>
          </Box>
          <Box w="100%">
            <Text color="#fff" fontSize="14px" textDecoration="underline">¿Olvidaste tu contraseña?</Text>
          </Box>
          <Box w="100%">
            <Button w="100%" h="40px" rightIcon={<BsArrowRightCircle />} isLoading={cargando} onClick={handleClick} bg={cargando ? 'oscuro.100' : 'claro.100'} color={cargando ? '#1e1e1e' : '#fff'} variant='solid'>Iniciar sesión</Button>
          </Box>
          <Box w="100%" display="flex" flexDirection="row" gap="5px">
            <Text color="#fff" fontSize="14px">¿No tienes cuenta?</Text>
            <Text onClick={() => { navigate('/registro') }} color="#fff" fontSize="14px" fontWeight="bold" textDecoration="underline">Registrate acá</Text>
          </Box>
        </FormControl>
    );
}

export default FormLogin