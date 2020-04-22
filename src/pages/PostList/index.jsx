import React, { useState, useEffect, useContext } from 'react';

import { Post } from 'components/Post';
import { Loader } from 'components/Loader';
import { Wrapper } from 'visual/styles/Wrapper';
import { getPosts } from 'logic/requests/post';
import { getAuthors } from 'logic/requests/author';
import { ordinatePosts } from 'logic/post-ordination';
import { filterByAuthor } from 'logic/post-filter';
import { TEXTS } from 'logic/texts';

import { SettingsContext } from 'contexts/Settings';
import { Settings } from './Settings';
import { Container } from './styles';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateData = async () => {
    setLoading(true);
    const { data: authorsData } = await getAuthors();
    const { data: postsData } = await getPosts();

    setAuthors(authorsData);
    setPosts(postsData);

    setLoading(false);
  };

  const findAuthor = (id) => {
    return authors.find((author) => author.id === id);
  };

  useEffect(() => {
    updateData();
  }, []);

  const {
    settings: { viewType, order, author },
  } = useContext(SettingsContext);

  return (
    <Container>
      <Wrapper>
        <Settings authors={authors} />
        {loading && <Loader area-label={TEXTS.loader} />}
        {!loading &&
          filterByAuthor(
            ordinatePosts(posts, order),
            author,
          ).map(({ title, body, metadata: { authorId, publishedAt } }) => (
            <Post
              key={`post-${title}-${publishedAt}`}
              title={title}
              author={findAuthor(authorId)}
              date={publishedAt}
              body={body}
              small={viewType === 'less'}
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default PostList;
