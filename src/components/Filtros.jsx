import { Box, Button, FormControl, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsArrowRightCircle, BsFillCalendar2RangeFill } from 'react-icons/bs'
import { FiFilter } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'

const Filtros = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [formData, setFormData] = useState({
        origen: '',
        checkIn: '',
        checkOut: '',
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

  return (
    <Box maxW="400px">
        <Box w="350px">
            <Button w="100%" h="40px" rightIcon={<FiFilter />} onClick={onOpen} bg='oscuro.100' color='#fff' variant='solid'>Filtros</Button>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="85%" maxW="400px" mt={["50%", "30%", "15%"]}>
            <ModalHeader>Filtros</ModalHeader>
            <ModalCloseButton />
            <ModalBody w="100%" p="0px">
            <FormControl w="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap="10px">
                <Box h="auto" borderRadius="10px" w="90%" display="flex" justifyContent="center" flexDirection="column" alignItems="center" gap="10px">
                    <Box w="100%">
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents="none"
                            children={<ImLocation2 color='#1e1e1e'/>}
                            />
                            <Input color="#1e1e1e" sx={{ '::placeholder': { color: '#1e1e1e'},}}
                            placeholder="¿A donde vas?"
                            onChange={handleChange}
                            />
                        </InputGroup>
                    </Box>
                    <Box w="100%" display="flex" flexDirection="row" gap="10px">
                        <Box w="48.5%">
                            <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<BsFillCalendar2RangeFill color='#1e1e1e'/>}/>
                                <Input color="#1e1e1e" sx={{ '::placeholder': { color: '#1e1e1e'},}} type='text' w="100%" h="40px" variant='outline' placeholder="Check-In" name="caract_cel" onChange={handleChange} />
                            </InputGroup>
                        </Box>
                        <Box w="48.5%">
                            <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<BsFillCalendar2RangeFill color='#1e1e1e'/>}/>
                                <Input color="#1e1e1e" sx={{ '::placeholder': { color: '#1e1e1e'},}} type='text' w="100%" h="40px" variant='outline' placeholder="Check-Out" name="nro_cel" onChange={handleChange} />
                            </InputGroup>
                        </Box>
                    </Box>
                    <Box w="100%">
                        <Button w="100%" bg='oscuro.100' color="#fff" onClick={onClose} mr={3} > Aplicar </Button>
                    </Box>
                </Box>
                </FormControl>
            </ModalBody>
            <ModalFooter p="0" mb="20px">
                
            </ModalFooter>
        </ModalContent>
        </Modal>
    </Box>
    
  )
}

export default Filtros