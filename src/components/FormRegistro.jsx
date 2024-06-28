import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowRightCircle, BsCalendarDate } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { BiRename, BiWorld } from 'react-icons/bi';
import { FaPassport } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';

const FormRegistro = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [cargando, setCargando] = useState(false);
    const [formData, setFormData] = useState({
        fullname_client: "",
        dateofbirth_client: "",
        email_client: "",
        dni_client: 0,
        password_client: "",
        phone_client: 0,
        postalcode_client: 3260,
        addressline1_client: "",
        addressline2_client: "",
        city_client: "",
        state_client: "",
        country_client: ""
      });

    const handleChange = (e) => {
        const { name, value } = e.target;

        const newValue = name === 'phone_client' ? '+54' + value : value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
      };

      const handleClick1 = async() =>{
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
            navigate('/');
        }, 1500);
    }

    const handleClick = async() =>{
        setCargando(true);

        if (formData.fullname_client.length < 8) {
            setCargando(false);
            toast({
                title: 'Datos erróneos',
                description: "El apellido y nombre debe tener al menos 5 caracteres.",
                status: 'error',
                duration: 4000,
                isClosable: true,
            })
            return;
        }

        if (!formData.email_client || !formData.email_client.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setCargando(false);
            toast({
              title: 'Datos erróneos',
              description: 'Por favor, ingrese un correo electrónico válido.',
              status: 'error',
              duration: 4000,
              isClosable: true,
            });
            return;
        }

        if (!(formData.password_client.length >= 8 && formData.password_client.length <= 20)) {
            setCargando(false);
            toast({
              title: 'Datos erróneos',
              description: 'La contraseña debe tener entre 8 y 20 caracteres.',
              status: 'error',
              duration: 4000,
              isClosable: true,
            });
            return;
          }

        if ( !(formData.phone_client.length >= 8 && formData.phone_client.length <= 20)) {
        setCargando(false);
        toast({
            title: 'Datos erróneos',
            description: 'El número de celular debe ser un número entre 8 y 13 dígitos.',
            status: 'error',
            duration: 4000,
            isClosable: true,
        });
        return;
        }

        if ( !( (formData.dni_client.length === 7 || formData.dni_client.length === 8) ) ) {
            setCargando(false);
            toast({
                title: 'Datos erróneos',
                description: 'El DNI debe ser un número de 6 o 7 caracteres.',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        return;
        }
          

        if (!(formData.addressline1_client.length >= 10 && formData.addressline1_client.length <= 50)) {
            setCargando(false);
            toast({
              title: 'Datos erróneos',
              description: 'La dirección debe tener entre 10 y 50 caracteres.',
              status: 'error',
              duration: 4000,
              isClosable: true,
            });
            return;
          }
          

          if (!(formData.addressline2_client.length >= 10 && formData.addressline2_client.length <= 50)) {
            setCargando(false);
            toast({
              title: 'Datos erróneos',
              description: 'La dirección debe tener entre 10 y 50 caracteres.',
              status: 'error',
              duration: 4000,
              isClosable: true,
            });
            return;
          }

          if (!formData.country_client.length != "") {
            setCargando(false);
            toast({
                title: 'Datos erróneos',
                description: 'El país es requerido.',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
            return;
            }


        if (!(formData.state_client.length != "")) {
            setCargando(false);
            toast({
                title: 'Datos erróneos',
                description: 'La provincia es requerida.',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        return;
        }

        if (!(formData.city_client.length != "")) {
            setCargando(false);
            toast({
                title: 'Datos erróneos',
                description: 'La ciudad es requerida.',
                status: 'error',
                duration: 4000,
                isClosable: true,
            });
        return;
        }

        const res = await fetch("http://18.212.63.4:3000/api/v1/auth/register", {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json", "accept": "*/*" }
        });

        setCargando(false);
        console.log(res);
        if (res.status == '201'){
            toast({
                title: 'Cuenta creada correctamente',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })

            setTimeout(() => {
                navigate(`/`)
            }, 2000);
        } 
        else if (res.status == '409'){
            toast({
                title: 'Correo ya registrado',
                description: 'El correo ingresado ya se encuentra registrado.',
                status: 'error',
                isClosable: true,
            });
        }

       
    };

  return (
    <FormControl w="100%" maxW="350px" display="flex" flexDirection="column" alignItems="center" gap="15px">
        <Box w="100%">
            <Text textAlign="center" fontSize="30px" fontWeight="bold" color="#fff">Registrate</Text>
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
                />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<MdOutlineAlternateEmail color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                placeholder="Correo electrónico"
                onChange={handleChange} name="email_client" type="email"
                />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement
                pointerEvents="none"
                children={<RiLockPasswordLine color='#fff'/>}
                />
                <Input color="#fff" sx={{ '::placeholder': { color: '#fff'},}}
                placeholder="Contraseña"
                onChange={handleChange} name="password_client" type='password'
                />
            </InputGroup>
        </Box>
        <Box w="100%">
                <InputGroup>
                    <InputLeftAddon children='+54'/>
                    <Input type='number' w="100%" h="40px" variant='outline' placeholder="3446234312" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="phone_client" onChange={handleChange} />
                </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaPassport color='#fff'/>} />
                <Input type='number' w="100%" h="40px" variant='outline' placeholder="Número de documento" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="dni_client" onChange={handleChange} />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<BsCalendarDate color='#fff'/>} />
                <Input type='date' w="100%" h="40px" variant='outline' placeholder="Fecha de nacimiento" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="dateofbirth_client" onChange={handleChange} />
            </InputGroup>
        </Box>
        <Box w="100%">
            <InputGroup>
                <InputLeftElement pointerEvents="none" children={<BiWorld color='#fff'/>} />
                <Input type='text' w="100%" h="40px" variant='outline' placeholder="Pais" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="country_client" onChange={handleChange} />
            </InputGroup>
        </Box>
        <Box w="100%" display="flex" flexDirection="row" gap="10px">
            <Box w="48.5%">
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<BiWorld color='#fff'/>} />
                    <Input type='text' w="100%" h="40px" variant='outline' placeholder="Provincia" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="state_client" onChange={handleChange} />
                </InputGroup>
            </Box>
            <Box w="48.5%">
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<BiWorld color='#fff'/>} />
                    <Input type='text' w="100%" h="40px" variant='outline' placeholder="Ciudad" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="city_client" onChange={handleChange} />
                </InputGroup>
            </Box>
        </Box>
        <Box w="100%" display="flex" flexDirection="row" gap="10px">
            <Box w="48.5%">
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<ImLocation2 color='#fff'/>} />
                    <Input type='text' w="100%" h="40px" variant='outline' placeholder="Dirección 1" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="addressline1_client" onChange={handleChange} />
                </InputGroup>
            </Box>
            <Box w="48.5%">
                <InputGroup>
                    <InputLeftElement pointerEvents="none" children={<ImLocation2 color='#fff'/>} />
                    <Input type='text' w="100%" h="40px" variant='outline' placeholder="Dirección 2" color="#fff" sx={{ '::placeholder': { color: '#fff'},}} name="addressline2_client" onChange={handleChange} />
                </InputGroup>
            </Box>
        </Box>
        <Box w="100%">
            <Button w="100%" h="40px" rightIcon={<BsArrowRightCircle />} isLoading={cargando} onClick={handleClick} bg={cargando ? 'oscuro.100' : 'claro.100'} color={cargando ? '#1e1e1e' : '#fff'} variant='solid'>Registrarme</Button>
        </Box>
        <Box w="100%" display="flex" flexDirection="row" gap="5px">
            <Text color="#fff" fontSize="14px">¿Ya tienes cuenta?</Text>
            <Text onClick={()=>{navigate('/login')}} color="#fff" fontSize="14px" fontWeight="bold" textDecoration="underline">Inicia sesión acá</Text>
        </Box>
    </FormControl>
  )
}

export default FormRegistro