import React from 'react';

import { Select } from 'components/Select';

import { Container, SelectWrapper } from './styles';

const orderOptions = [
  { label: 'Last published', value: 'desc' },
  { label: 'First published', value: 'asc' },
];

export const Settings = () => (
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
      <Select id="author" label="Author" onChange={() => {}} />
    </SelectWrapper>
    <SelectWrapper>
      <Select id="view-type" label="View type" onChange={() => {}} />
    </SelectWrapper>
  </Container>
);

export default Settings;
