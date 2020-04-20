import React, { useState, useEffect } from 'react';

import { Post } from 'components/Post';
import { Wrapper } from 'visual/styles/wrapper';
import { getPosts } from 'logics/requests/post';
import { getAuthors } from 'logics/requests/author';

import { Settings } from './Settings';
import { Container } from './styles';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);

  const updateData = async () => {
    const { data: authorsData } = await getAuthors();
    const { data: postsData } = await getPosts();

    setAuthors(authorsData);
    setPosts(postsData);
  };

  const findAuthor = (id) => {
    return authors.find((author) => author.id === id);
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Settings authors={authors} />
        {posts.map(({ title, body, metadata: { authorId, publishedAt } }) => (
          <Post
            key={`post-${title}-${publishedAt}`}
            title={title}
            author={findAuthor(authorId)}
            date={publishedAt}
            body={body}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default PostList;
