import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'logic/date';

import { Container, Header, Title, Metadata, Info, InfoText } from './styles';

export const Small = ({ title, date }) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <Metadata>
        <Info>
          <InfoText>{format(date)}</InfoText>
        </Info>
      </Metadata>
    </Header>
  </Container>
);

Small.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Small;
