import React from 'react';
import { StyledSelect } from './Filter.styles';

function Filter({ label, options, onChange }) {
  return (
    <StyledSelect
      as="select"
      aria-label={label}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Filter;
