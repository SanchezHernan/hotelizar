import { InputGroup, InputLeftElement, Input, InputLeftAddon } from '@chakra-ui/react';

const CustomInputGroup = ({ icon, placeholder, name, type = 'text', handleChange }) => (
  <InputGroup>
    <InputLeftElement pointerEvents="none" children={icon} />
    <Input
      type={type}
      color="#fff"
      sx={{ '::placeholder': { color: '#fff' } }}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      aria-label={placeholder}
      id={name}
    />
  </InputGroup>
);

export default CustomInputGroup;