import React, { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';

export default function DateRangePicker() {
  const [state, setState] = useState();

  const initialState = {
    range: undefined,
  };
  const containerStyles = {
    maxWidth: 400,
  };

  return (
    <div
      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
      style={containerStyles}
    >
      <DatePicker
        id="datePicker-15"
        label="DatePicker Label"
        placeholder="Select range of dates"
        selectionType="range"
        formatStyle="large"
        variant="single"
        // value={state.range}
        onChange={value => setState({ range: value })}
      />
    </div>);

};
