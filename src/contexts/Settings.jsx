import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const SettingsInitiaState = {
  order: 'desc',
  author: '',
  viewType: 'more',
};

export const SettingsContext = createContext({
  settings: SettingsInitiaState,
});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(SettingsInitiaState);

  return (
    <SettingsContext.Provider value={{ setSettings, settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
