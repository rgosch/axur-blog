export const filterByAuthor = (posts, author) => {
  if (!author) return posts;
  return posts.filter(post => `${post.metadata.authorId}` === `${author}`);
};
