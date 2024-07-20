import { useState, useCallback } from 'react';

const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [cargando, setCargando] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const handleClick = useCallback(() => {
    setCargando(true);
    const timeoutId = setTimeout(() => {
      setCargando(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

  return { formData, cargando, handleChange, handleClick };
};

export default useForm;