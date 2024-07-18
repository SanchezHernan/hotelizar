import { Box, Button, Divider, Image, Input, InputGroup, InputLeftAddon, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto from '../assets/img/foto.jpg';
import maps from '../assets/img/maps.jpg';
import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { CiCalendarDate, CiLocationOn } from 'react-icons/ci';
import { AiFillStar } from 'react-icons/ai';
import { FaBath, FaBed, FaCalendarAlt, FaRegAddressCard, FaRegCreditCard } from 'react-icons/fa';
import CardComentarios from './CardComentarios';
import LayoutPago from './LayoutPago';
import { GiPadlock } from "react-icons/gi";
import { BiRename } from "react-icons/bi";
import { GrCreditCard } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CardAlojamiento = ({data}) => {

    const navigate = useNavigate();
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const onChange = (index, item) => {
        // Manejar el cambio de elemento en el carousel
    };

    const onClickItem = (index, item) => {
        // Manejar el clic en un elemento del carousel
    };

    const onClickThumb = (index, item) => {
        // Manejar el clic en una miniatura del carousel
    };

    const handleClick = () => {
        window.history.go(-1);
      };

    function getCookie(name) {
        const cookieName = `${name}=`;
        const cookiesArray = document.cookie.split(';');
        for (let i = 0; i < cookiesArray.length; i++) {
          let cookie = cookiesArray[i].trim();
          if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
          }
        }
        return '';
    }
    
    const rolUser = getCookie('rolUser');

    const reverar = function () {
        console.log('Rol: ' + rolUser);
        if (rolUser == 'user'){
            onOpen();
        } else if (rolUser == 'guest'){
            toast({
                title: 'Error',
                description: "Para poder reservar debes iniciar sesión",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
            setTimeout(()=>{
                navigate('/login');
            }, 3000);
        }
    }

  return (
    <Box className='cardAlBox' w="100%" display="flex" flexDirection="column" alignItems="center" gap="10px">
        <Box w="100%" height={["350px", "600px", "600px"]} display="flex" flexDirection="column" alignItems="center">
            <Box w="100%" h="40px" display="flex" alignItems="center" justifyContent="center" bg="rgba(0, 0, 0, 0.3)" position="fixed" zIndex="1" top="0" >
                <Box w="90%">
                    <MdOutlineKeyboardArrowLeft color="#fff" fontSize="30px" onClick={handleClick}/>
                </Box>
            </Box>
            <Carousel showThumbs={false} showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <Box>
                    <Image src={foto} w="100%" height={["350px", "600px", "600px"]} objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height={["350px", "600px", "600px"]} objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height={["350px", "600px", "600px"]} objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height={["350px", "600px", "600px"]} objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height={["350px", "600px", "600px"]} objectFit="fill"/>
                </Box>
                <Box>
                    <Image src={foto} w="100%" height={["350px", "600px", "600px"]} objectFit="fill"/>
                </Box>
            </Carousel>
        </Box>
        <Box w="85%" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column" gap="10px">
                <Box>
                    <Text fontSize="20px" fontWeight="bold" color="#1e1e1e">{data.title_rental}</Text>
                </Box>
                <Box display="flex" flexDirection="row" gap="5px" alignItems="center" mt="-10px">
                    <CiLocationOn color="rgb(0,0,0,0.5)"/>
                    <Text color="rgb(0,0,0,0.5)">{data.addressline1_rental}, {data.city_rental}</Text>
                </Box>
                <Box display="flex" flexDirection="row" gap="5px" alignItems="center" mt="-10px">
                    <Box display="flex" flexDirection="row" alignItems="center">
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <AiFillStar color="#1e1e1e"/>
                        <Text>/5</Text>
                    </Box>
                    <Text color="#1e1e1e">(30 comentarios)</Text>
                </Box>
            </Box>
            <Divider color="#1e1e1e" m="10px 0" />
            <Box color="rgb(0,0,0,0.7)">
                <Box display="flex" flexDirection="row" gap="5px" justifyContent="space-between" alignItems="center">
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBed />
                        <Text>{data.numbedrooms_rental} hab</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaBath />
                        <Text>{data.numbathrooms_rental} baños</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaPeopleGroup />
                        <Text>{data.maxguest_rental} pers</Text>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <FaCalendarAlt />
                        <Text>{data.minstay_rental} dias min</Text>
                    </Box>
                </Box>
            </Box>
            <Divider color="#1e1e1e" m="10px 0" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Box w="100%" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                    <Box display="flex" flexDirection="row" gap="5px" alignItems="center">
                        <Text fontSize="18px" fontWeight="bold">Comentarios</Text>
                        <Text>(30)</Text>
                    </Box>
                    <Text textDecoration="underline">Ver todos</Text>
                </Box>
                <CardComentarios />
                <CardComentarios />
            </Box>
            <Divider color="#1e1e1e" m="10px 0" />
            <Box display="flex" flexDirection="column" alignItems="flex-start">
                <Text fontSize="18px" fontWeight="bold">Donde estamos</Text>
                <Image mt="10px" borderRadius="5px" src={maps} />
            </Box>
        </Box>
        <br></br>
        <br></br>
        <br></br>
        <Box w={["100%", "600px", "800px"]} borderRadius={["0", "10px 10px 0 0"]} h="60px" bg="#ccc" position="fixed" bottom="0" display="flex" alignItems="center" justifyContent="center">
            <Box w="85%"  display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                <Box display="flex" flexDirection="row" gap="5px" alignItems="center" justifyContent="center">
                    <Text color="oscuro.100" fontWeight="bold" fontSize="22px">{data.pricepernight_rental} USD</Text>
                    <Text>/noche</Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                    <Button onClick={reverar} bg="oscuro.100" color="#fff" w="150px" rightIcon={<MdKeyboardArrowRight />}>Reservar</Button>
                </Box>
            </Box>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w="95%">
                <ModalHeader>Tarjeta de crédito o débito</ModalHeader>
                <ModalCloseButton />
                <ModalBody w="100%" display="flex" flexDirection="column" gap="10px">
                    <Box w="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <Text fontSize="14px">Número de tarjeta</Text>
                        <InputGroup>
                            <InputRightElement><FaRegCreditCard /></InputRightElement>
                            <Input placeholder='xxxx-xxxx-xxxx-xxxx'/>
                        </InputGroup>
                    </Box>
                    <Box w="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                        <Box w="45%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                            <Text fontSize="14px">Vencimiento</Text>
                            <InputGroup>
                                <InputRightElement><CiCalendarDate /></InputRightElement>
                                <Input placeholder='xx/xx'/>
                            </InputGroup>
                        </Box>
                        <Box w="45%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                            <Text fontSize="14px">Código de seguridad</Text>
                            <InputGroup>
                                <InputRightElement><GrCreditCard /></InputRightElement>
                                <Input placeholder="XXX"/>
                            </InputGroup>
                        </Box>
                    </Box>
                    <Box w="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <Text fontSize="14px">Nombre del titular como aparece en la tarjeta</Text>
                        <InputGroup>
                            <InputRightElement><BiRename /></InputRightElement>
                            <Input placeholder="XXXXXXX XXXXXXX XXXXXX"/>
                        </InputGroup>
                    </Box>
                    <Box mb="10px" w="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <Text fontSize="14px">Documento del titular</Text>
                        <InputGroup>
                            <InputRightElement><FaRegAddressCard /></InputRightElement>
                            <Input placeholder="XXXXXXXX"/>
                        </InputGroup>
                    </Box>
                    <Box mt="10px" w="100%" display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                        <Text fontSize="14px" fontWeight="bold">Completa tu informacion</Text>
                        <Text fontSize="14px">E-mail</Text>
                        <InputGroup>
                            <InputRightElement><FaRegAddressCard /></InputRightElement>
                            <Input placeholder="xxxxx@gmail.com"/>
                        </InputGroup>
                    </Box>
                </ModalBody>

                <ModalFooter w="100%">
                    <Button w="100%" leftIcon={<GiPadlock />} colorScheme='blue' onClick={onClose}>Pagar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default CardAlojamiento