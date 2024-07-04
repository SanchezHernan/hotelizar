// components/DatePickerInput.jsx
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsFillCalendar2RangeFill } from 'react-icons/bs';
import React from 'react';

const DatePickerInput = ({ selectedDate, onChange, placeholder, id }) => {
  const isDateDisabled = date => {
    return date > new Date();
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsFillCalendar2RangeFill color='#fff' />
      </InputLeftElement>
      <DatePicker
        selected={selectedDate}
        onChange={onChange}
        placeholderText={placeholder}
        id={id}
        filterDate={isDateDisabled}
        customInput={
          <Input
            color="#fff"
            sx={{ '::placeholder': { color: '#fff' }, paddingLeft: '2.5rem' }}
          />
        }
        wrapperClassName="datePicker"
        portalId="root"
        popperPlacement="top-end"
      />
    </InputGroup>
  );
};

export default DatePickerInput;
