import React from 'react';
import PropTypes from 'prop-types';

import { Select } from 'components/Select';

import { Container, SelectWrapper } from './styles';

export const Settings = ({ authors }) => {
  const orderOptions = [
    { label: 'Last published', value: 'desc' },
    { label: 'First published', value: 'asc' },
  ];

  const authorsOptions = [
    { label: 'All authors', value: '' },
    ...authors.map(({ id, name }) => ({ label: name, value: id })),
  ];

  const viewTypeOptions = [
    { label: 'More information', value: 'more' },
    { label: 'Less information', value: 'less' },
  ];
  return (
    <Container>
      <SelectWrapper>
        <Select
          id="order"
          label="Order"
          options={orderOptions}
          selected="asc"
          defaultValue="asc"
          onChange={() => {}}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          id="author"
          label="Author"
          options={authorsOptions}
          onChange={() => {}}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          id="view-type"
          options={viewTypeOptions}
          selected="more"
          label="View type"
          onChange={() => {}}
        />
      </SelectWrapper>
    </Container>
  );
};

Settings.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Settings;
