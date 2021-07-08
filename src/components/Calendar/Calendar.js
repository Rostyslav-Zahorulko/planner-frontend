import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ sprintStartMinDate }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={date => setStartDate(date)}
      shouldCloseOnSelect={true}
      minDate={sprintStartMinDate}
      placeholderText="Sprint start date"
    />
  );
};

export default Calendar;
