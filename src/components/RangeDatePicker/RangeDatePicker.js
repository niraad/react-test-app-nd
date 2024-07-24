import React from 'react';
import { DatePicker, DatePickerInput } from '@carbon/react';

const RangeDatePicker = () => {
  return (
    <DatePicker datePickerType="range">
      <DatePickerInput id="date-picker-input-id-start" placeholder="mm/dd/yyyy" labelText="Start date" size="md" />
      <DatePickerInput id="date-picker-input-id-finish" placeholder="mm/dd/yyyy" labelText="End date" size="md" />
    </DatePicker>
  );
};

export default RangeDatePicker;
