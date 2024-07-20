import { Box, Button, Input, Select, Text, Textarea, useToast } from '@chakra-ui/react';
import React, { useState, useCallback, useMemo, useEffect, useContext } from 'react';
import { IoIosArrowDropright } from 'react-icons/io';
import Servicios from '../../components/Servicios';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Navbar from '../../components/Navbar';

const SubirAlojamiento = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { userRole } = useContext(UserContext);

  const [formulario, setFormulario] = useState({
    tipo: '',
    titulo: '',
    descripcion: '',
    direccion: '',
    pais: '',
    provincia: '',
    ciudad: '',
    precio_por_noche: '',
    cantidad_personas: '',
    estadia_minima: '',
    cantidad_habitaciones: '',
    cantidad_baño: '',
  });

  const toast = useToast();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  }, []);

  const validarFormulario = useCallback(() => {
    const camposRequeridos = [
      'tipo',
      'titulo',
      'descripcion',
      'direccion',
      'pais',
      'provincia',
      'ciudad',
      'precio_por_noche',
      'cantidad_personas',
      'estadia_minima',
      'cantidad_habitaciones',
      'cantidad_baño',
    ];

    return camposRequeridos.every((campo) => formulario[campo] && formulario[campo].trim() !== '');
  }, [formulario]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validarFormulario()) {
      console.log('Formulario completo:', formulario);
    } else {
      toast({
        title: 'Formulario incompleto',
        description: 'Todos los campos son requeridos.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const servicios = useMemo(() => [
    { nombre: 'Pileta', icon: 'pileta' },
    { nombre: 'Jacuzzi', icon: 'jacuzzi' },
    { nombre: 'Patio', icon: 'patio' },
    { nombre: 'Parrilla', icon: 'parrilla' },
    { nombre: 'Zona para comer al aire libre', icon: 'comer_afuera' },
    { nombre: 'Lugar para hacer fogata', icon: 'fogata' },
    { nombre: 'Piano', icon: 'piano' },
    { nombre: 'Mesa de billar', icon: 'billar' },
    { nombre: 'Chimenea interior', icon: 'chimenea' },
    { nombre: 'Gimnasio', icon: 'gimnasio' },
  ], []);

  const fields = useMemo(() => [
    { label: 'Tipo de alojamiento', name: 'tipo', type: 'select', options: ['Casa', 'Hotel', 'Hostel', 'Departamento'] },
    { label: 'Titulo', name: 'titulo', type: 'input', placeholder: 'Titulo del alojamiento' },
    { label: 'Descripcion', name: 'descripcion', type: 'textarea', placeholder: 'Descripcion del alojamiento' },
    { label: 'Dirección', name: 'direccion', type: 'input', placeholder: 'Dirección del alojamiento' },
    { label: 'País', name: 'pais', type: 'select', options: ['Argentina', 'Chile', 'Brasil', 'Uruguay'] },
    { label: 'Provincia', name: 'provincia', type: 'select', options: ['Buenos Aires', 'Córdoba', 'Santa Fe'] },
    { label: 'Ciudad', name: 'ciudad', type: 'select', options: ['Buenos Aires', 'Córdoba', 'Rosario'] },
    { label: 'Precio por noche', name: 'precio_por_noche', type: 'input', placeholder: '$ Precio por noche', inputType: 'number' },
    { label: 'Capacidad de personas', name: 'cantidad_personas', type: 'select', options: [1, 2, 3, 4, 5] },
    { label: 'Estadia minima', name: 'estadia_minima', type: 'select', options: [1, 2, 3, 4, 5] },
    { label: 'Cantidad de habitaciones', name: 'cantidad_habitaciones', type: 'select', options: [1, 2, 3, 4, 5] },
    { label: 'Cantidad de baños', name: 'cantidad_baño', type: 'select', options: [1, 2, 3, 4, 5] },
  ], []);

  useEffect(() => {
    if (userRole === 'guest') {
      navigate('/login', { state: { from: location } });
    }
  }, [userRole, navigate, location]);


  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center" bg="#fff">
      <Navbar title="Subir Alojamiento" />
      <Box color="#1e1e1e" w="85%" mt="60px" mb="20px" gap="15px" maxW={["400px", "600px", "800px"]} display="flex" flexDirection="column" alignItems="center">
        {fields.map(({ label, name, type, options, placeholder, inputType }) => (
          <Box key={name} w="100%">
            <Text fontWeight="500">{label}</Text>
            {type === 'input' && (
              <Input name={name} onChange={handleChange} placeholder={placeholder}  type={inputType || 'text'}/>
            )}
            {type === 'textarea' && (
              <Textarea name={name} onChange={handleChange} placeholder={placeholder} />
            )}
            {type === 'select' && (
              <Select placeholder="Seleccione.." name={name} onChange={handleChange}>
                {options.map((option, index) => (
                  <option key={index} value={typeof option === 'string' ? option.toLowerCase().replace(' ', '_') : option}>
                    {option}
                  </option>
                ))}
              </Select>
            )}
          </Box>
        ))}
        <Box w="100%">
          <Text fontWeight="500">¿Tenés algún servicio destacado?</Text>
          <Servicios servicios={servicios} />
        </Box>
        <Box mt="10px" w="100%">
          <Button type="button" onClick={handleSubmit} w="100%" color="#fff" bg="claro.100" rightIcon={<IoIosArrowDropright />}>
            Subir Alojamiento
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default withAuthRedirect(SubirAlojamiento);
