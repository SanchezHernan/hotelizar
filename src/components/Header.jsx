import { 
    Box, Button, FormControl, Input, InputGroup, InputLeftElement, Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import fondo from '../assets/img/fondo-header.jpg';
import { ImLocation2 } from 'react-icons/im';
import { IoMdSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import DatePickerInput from './DatePickerInput';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false);
    const [formData, setFormData] = useState({
        origen: '',
        checkIn: '',
        checkOut: '',
    });
    

    // DatePicker
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

    const handleCheckInChange = (date) => {
        setCheckInDate(date);
        if (checkOutDate && date > checkOutDate) {
            setCheckOutDate(null);
        }
    };

    const handleCheckOutChange = (date) => {
        setCheckOutDate(date);
        if (checkInDate && date < checkInDate) {
            setCheckInDate(null);
        }
    };

    const handleClick = async () => {
        setCargando(true);
        setTimeout(() => {
            setCargando(false);
            navigate('/resultados');
        }, 1500);
    }
    
    return (
        <Box className="HeaderContainer" w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
          <Navbar title="HOTELIZAR" />
          <FormControl
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            gap="10px"
            backgroundImage={`url(${fondo})`}
            backgroundSize="cover"
            backgroundPosition="center"
            width={["100vw", "100vw", "98.8vw"]}
            height="100vh"
            position="relative"
            top="0"
          >
            <Box w="75%" maxW="500px" textAlign="center" marginTop="-85px" marginBottom="55px" fontSize="19px" color="white" zIndex="1">
              <Text as="span" opacity="0.75">
                Para encontrar alojamiento puede utilizar el buscador de abajo o buscar en el{" "}
              </Text>
              <Link to="/mapa" style={{ color: 'inherit', textDecoration: 'underline', opacity: '1' }}>
                MAPA
              </Link>
            </Box>
            <Box
              className="fondo"
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              background="rgba(0, 0, 0, 0.3)"
              zIndex="0"
            ></Box>
    
            <Box 
              h="auto"
              p="20px"
              bg="claroTransp.100"
              borderRadius="10px"
              w="90%"
              maxW="500px"
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems="center" 
              gap="10px"
            >
              <Box w="100%" display="flex" flexDirection="column" gap="10px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<ImLocation2 color='#fff' />}
                  />
                  <Input
                    id="location-input"
                    color="#fff"
                    sx={{ '::placeholder': { color: '#fff' }, }}
                    placeholder="¿A donde vas?"
                    name="origen"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Box>
              <Box w="100%" display="flex" flexDirection="row" gap="10px" flexWrap="wrap">
                <Box flex="1" minWidth="45%">
                  <DatePickerInput 
                    id="checkin-input" 
                    selectedDate={checkInDate} 
                    onChange={handleCheckInChange} 
                    placeholder="Check-In"
                    minDate={new Date()}
                    maxDate={checkOutDate}
                  />
                </Box>
                <Box flex="1" minWidth="45%">
                  <DatePickerInput 
                    id="checkout-input" 
                    selectedDate={checkOutDate} 
                    onChange={handleCheckOutChange} 
                    placeholder="Check-Out"
                    minDate={checkInDate || new Date()}
                  />
                </Box>
              </Box>
              <Box w="100%" display="flex" flexDirection="row" justifyContent="center">
                <Button 
                  w="100%" 
                  h="40px" 
                  rightIcon={<IoMdSearch />} 
                  isLoading={cargando} 
                  onClick={handleClick} 
                  bg={cargando ? 'oscuro.100' : 'claro.100'} 
                  color={cargando ? '#1e1e1e' : '#fff'} 
                  variant='solid'>
                    Buscar
                </Button>
              </Box>
            </Box>
          </FormControl>
        </Box>
    )   ;
}

export default Header;
