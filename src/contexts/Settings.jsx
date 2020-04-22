import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const storageKey = 'SETTINGS';

const getSettingsByStorage = () => {
  return JSON.parse(localStorage.getItem(storageKey));
};

const setSettingsInStorage = (value) => {
  window.localStorage.setItem(storageKey, JSON.stringify(value));
};

// Author is the unique not used by storage
export const settingsInitiaState = {
  order: 'desc',
  viewType: 'more',
  ...getSettingsByStorage(),
  author: '',
};

export const SettingsContext = createContext({});

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(settingsInitiaState);

  const setSettingsCallback = (value) => {
    setSettingsInStorage(value);
    setSettings(value);
  };

  return (
    <SettingsContext.Provider
      value={{ setSettings: setSettingsCallback, settings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
