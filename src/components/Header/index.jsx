import React from 'react';

import { TEXTS } from 'logics/texts';

import logo from 'assets/img/logo.svg';

import { Container } from './styles';

export const Header = () => (
  <Container>
    <img src={logo} alt={TEXTS.header.logoAlt} />
  </Container>
);

export default Header;
