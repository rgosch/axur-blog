import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { Select } from 'components/Select';

import { SettingsContext } from 'contexts/Settings';
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

  const { settings, setSettings } = useContext(SettingsContext);
  const { order, author, viewType } = settings;

  const setOrder = (value) => {
    setSettings({ ...settings, order: value });
  };

  const setAuthor = (value) => {
    setSettings({ ...settings, author: value });
  };

  const setViewType = (value) => {
    setSettings({ ...settings, viewType: value });
  };

  return (
    <Container>
      <SelectWrapper>
        <Select
          id="order"
          label="Order"
          options={orderOptions}
          selected={order}
          defaultValue="asc"
          onChange={setOrder}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          id="author"
          label="Author"
          options={authorsOptions}
          selected={author}
          onChange={setAuthor}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          id="view-type"
          options={viewTypeOptions}
          selected={viewType}
          label="View type"
          onChange={setViewType}
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
