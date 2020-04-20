import React from 'react';

import { TEXTS } from 'logics/texts';

import logo from 'assets/img/logo.svg';

import { Container, Logo, Title } from './styles';

export const Header = () => (
  <Container>
    <Title>{TEXTS.header.title}</Title>
    <Logo src={logo} alt={TEXTS.header.logoAlt} />
  </Container>
);

export default Header;
