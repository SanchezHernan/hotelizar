import React, { useContext, useRef } from 'react';
import { 
    Box, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Divider, Text,
    useDisclosure, Image
} from '@chakra-ui/react';
import { IoMdExit, IoMdMenu, IoMdSearch, IoIosStats, IoIosLogIn, IoMdLogOut } from 'react-icons/io';
import { UserContext } from '../contexts/UserContext';
import { useLocation, useNavigate } from 'react-router-dom';

import booking from '../assets/img/booking.png'
import ownership from '../assets/img/ownership.png'
import building from '../assets/img/edificio.png'

const Navbar = ({ title }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const { userRole, setUserRole } = useContext(UserContext);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const btnRef = useRef();

    const handleClick = (route) => {
        if (location.pathname !== route) {
            navigate(route);
        }
        onClose();
    };
 
    const handleLogout = () => {
        // Eliminar todas las cookies relacionadas con el usuario
        document.cookie = "tokenUser=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = "userRole=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        
        setUserRole('guest');
        navigate('/login');
    };

    return (
        <>
            <Box w="100%" h="50px" display="flex" gap="20px" alignItems="center" position="fixed" zIndex="10" bg="claroTransparente.100" justifyContent="space-between">
                <Box paddingLeft="20%" flex="1" textAlign="center">
                    <Text fontSize="1.4rem">{ title }</Text>
                </Box>
                <Button ref={btnRef} onClick={onOpen} bg="transparent">
                    <IoMdMenu fontSize="30px" color="#1e1e1e"/>
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Hotelizar</DrawerHeader>
                    <Divider />
                    <DrawerBody>
                        <Box display='flex' flexDirection="column" w="100%" gap="10px" alignItems="flex-start">
                            {userRole === 'guest' && (
                                <>
                                    <Box display='flex' flexDirection='row' w='100%' justifyContent='space-between' cursor="pointer" onClick={() => handleClick('/login')}>
                                        <Text color="#1e1e1e">Iniciar sesión</Text>
                                        <IoIosLogIn />
                                    </Box>
                                    <Divider />
                                </>
                            )}
                            <Box display='flex' flexDirection='row' w='100%' justifyContent='space-between' cursor="pointer" onClick={() => handleClick('/')}>
                                <Text color="#1e1e1e">Buscar</Text>
                                <IoMdSearch />
                            </Box>
                            <Divider />
                            {userRole === 'host' && (
                                <>
                                    <Box display='flex' flexDirection='row' w='100%' justifyContent='space-between' cursor="pointer" onClick={() => handleClick('/subir-alojamiento')}>
                                        <Text color="#1e1e1e">Subir Alojamiento</Text>
                                        <Image src={building} boxSize="20px" />
                                    </Box>
                                    <Divider />
                                </>
                            )}
                            {userRole === 'user' && (
                                <>
                                    <Box display='flex' flexDirection='row' w='100%' justifyContent='space-between' cursor="pointer" onClick={() => handleClick('/propietario')}>
                                        <Text color="#1e1e1e">Ser Propietario</Text>
                                        <Image src={ownership} boxSize="20px" />
                                    </Box>
                                    <Divider />
                                    <Box display='flex' flexDirection='row' w='100%' justifyContent='space-between' cursor="pointer" onClick={() => handleClick('/mis-reservas')}>
                                        <Text color="#1e1e1e">Mis Reservas</Text>
                                        <Image src={booking} boxSize="20px" />
                                    </Box>
                                    <Divider />
                                </>
                            )}
                            {(userRole === 'admin' || userRole === 'host' || userRole === 'user') && (
                                <>
                                    <Box display='flex' flexDirection='row' w='100%' justifyContent='space-between' cursor="pointer" onClick={() => handleClick('/panel')}>
                                        <Text color="#1e1e1e">Estadísticas</Text>
                                        <IoIosStats></IoIosStats>
                                    </Box>
                                    <Divider />
                                </>
                            )}
                            
                        </Box>
                    </DrawerBody>
                    <DrawerFooter>
                        {userRole && userRole !== 'guest' && (
                            <Button bg="red.500" color="#fff" onClick={handleLogout} leftIcon={<IoMdLogOut />}> Cerrar sesión </Button>
                        )}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );

};

export default Navbar