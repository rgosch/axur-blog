import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Label,
  SelectNative,
  FakeSelect,
  FakeSelectText,
  Arrow,
} from './styles';

export const Select = ({ label, id, options, selected, onChange }) => {
  const current = options.find((item) => item.value === selected) || {};

  return (
    <Container>
      {!!label && <Label htmlFor={`select-${id}`}>{label}</Label>}
      <FakeSelect aria-hidden="true">
        <FakeSelectText>{current.label}</FakeSelectText>
        <Arrow />
      </FakeSelect>
      <SelectNative id={`select-${id}`} value={selected} onChange={onChange}>
        {!!options &&
          options.map(({ label: currentLabel, value }) => (
            <option key={value} value={value}>
              {currentLabel}
            </option>
          ))}
      </SelectNative>
    </Container>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  selected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Select.defaultProps = {
  label: '',
  options: [],
  selected: '',
};

export default Select;
