import { Box, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import foto from '../assets/img/foto.jpg';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PopupAlojamiento = React.memo(({ title, rating, price, id, lat, lng }) => {

    const navigate = useNavigate();


    const handleNavigate = () => {
        navigate(`/alojamiento/${id}`);
    };

    const generateUrl = () => {
        console.log(`${window.location.origin}/mapa/?lat=${lat}&lng=${lng}`);
    }

    return (
        <Box onClick={handleNavigate} cursor="pointer">
            <Carousel 
                showArrows={true} 
                showThumbs={false} 
                dynamicHeight={false}
            >
                <div>
                    <Image src={foto} w="200px" height="150px" borderRadius="10px 10px 0 0" />
                </div>
                <div>
                    <Image src={foto} w="200px" height="150px" borderRadius="10px 10px 0 0" />
                </div>
                <div>
                    <Image src={foto} w="200px" height="150px" borderRadius="10px 10px 0 0" />
                </div>
            </Carousel>
            <Box w="100%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mt="2">
                <Text textAlign="left" fontWeight="bold" fontSize="17px">{title}</Text>
            </Box>
            <Box w="100%" display="flex" flexDirection="row" alignItems="center" gap="2px">
                <Text fontWeight="bold">{price} USD</Text>
                <Text color="gray.600">/noche</Text>
            </Box>
            <Link href={generateUrl()} color="teal.500" target='_blank'>
                See URL
            </Link>
        </Box>
    );
});

PopupAlojamiento.propTypes = {
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
};

export default PopupAlojamiento;
