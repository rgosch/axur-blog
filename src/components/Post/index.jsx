import React from 'react';
import PropTypes from 'prop-types';

import { Small } from './Small';
import { Large } from './Large';

export const Post = ({ title, author, date, body, small }) => {
  return (
    <>
      {small && <Small title={title} date={date} />}
      {!small && (
        <Large title={title} author={author} date={date} body={body} />
      )}
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  date: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

Post.defaultProps = {
  small: false,
};

export default Post;
