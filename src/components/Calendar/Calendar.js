import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={date => setStartDate(date)}
      startDate={startDate}
      shouldCloseOnSelect={false}
      className=""
      placeholderText=" Start Date "
    />
  );
};
export default Calendar;
