import React from 'react';
import PropTypes from 'prop-types';

import { format } from 'logics/date';

import authorIcon from 'assets/img/user.svg';
import dateIcon from 'assets/img/calendar.svg';

import {
  Container,
  Header,
  Title,
  Metadata,
  Info,
  Icon,
  InfoText,
  Body,
  BodyContent,
} from './styles';

export const Post = ({ title, author, date, body }) => {
  const { name } = author;

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Metadata>
          <Info>
            <Icon src={authorIcon} aria-hidden />
            <InfoText>{name}</InfoText>
          </Info>
          <Info>
            <Icon src={dateIcon} aria-hidden />
            <InfoText>{format(date)}</InfoText>
          </Info>
        </Metadata>
      </Header>
      <Body>
        <BodyContent>{body}</BodyContent>
      </Body>
    </Container>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  date: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
