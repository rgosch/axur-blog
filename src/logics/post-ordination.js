export const ordinatePosts = (posts, mode) => {
  let localPosts = posts.sort((a, b) => a.metadata.publishedAt - b.metadata.publishedAt);

  if (mode === 'desc') {
    return localPosts.reverse()
  }

  return localPosts;
}
