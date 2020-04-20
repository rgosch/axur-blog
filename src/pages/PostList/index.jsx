import React from 'react';

import { Post } from 'components/Post';
import { Wrapper } from 'visual/styles/wrapper';

import { Settings } from './Settings';
import { Container } from './styles';

export const PostList = () => (
  <Container>
    <Wrapper>
      <Settings />
      <Post
        title="AssCo has revamped the theory of versioning"
        author={{ name: 'Nicholas Jordan', id: 1 }}
        date={1492004832000}
        body={
          'We will mesh the buzzword "strategic". Our feature set is unparalleled, but our subscriber-defined CAE and non-complex configuration is invariably considered a remarkable achievement. What does the commonly-used commonly-used term "strategic" really mean? Think ultra-long-term. The reporting factor can be summed up in one word: B2B2C. Think clicks-and-mortar. We believe we know that it is better to enhance compellingly than to monetize dynamically. Think real-time, backward-compatible. The ability to synergize macro-holistically leads to the capability to envisioneer holistically. The implementation factor can be summed up in one word: six-sigma.'
        }
      />
    </Wrapper>
  </Container>
);

export default PostList;
