import React from 'react';

import { Wrapper } from 'visual/styles/wrapper';
import { Container, Texts, Brand, Developer } from './styles';

export const Footer = () => (
  <Container>
    <Wrapper>
      <Texts>
        <Brand>Axur</Brand>
        <Developer href="https://gosch.io" target="_blank">
          Development by Gosch
        </Developer>
      </Texts>
    </Wrapper>
  </Container>
);

export default Footer;
