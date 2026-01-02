import { StyledSelect } from './Filter.styles';

function Filter({
  label, options, onChange, value,
}) {
  return (
    <StyledSelect aria-label={label} onChange={onChange} value={value}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Filter;
