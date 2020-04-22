import { filterByAuthor } from './post-filter';

describe('[Logics] post-filter > filterByAuthor', () => {
  it('Should filter by author id 1', () => {
    const author = 1;
    const posts = [
      { metadata: { authorId: author } },
      { metadata: { authorId: 5 } },
      { metadata: { authorId: 5 } },
      { metadata: { authorId: 4 } },
      { metadata: { authorId: 3 } },
      { metadata: { authorId: 2 } },
      { metadata: { authorId: author } },
    ];
    const filtered = filterByAuthor(posts, author);
    expect(filtered.length).toEqual(2);
  });
  
  it('Should filter by author id 5', () => {
    const author = 5;
    const posts = [
      { metadata: { authorId: 1 } },
      { metadata: { authorId: author } },
      { metadata: { authorId: author } },
      { metadata: { authorId: 4 } },
      { metadata: { authorId: 3 } },
      { metadata: { authorId: 2 } },
      { metadata: { authorId: 1 } },
    ];
    const filtered = filterByAuthor(posts, author);
    expect(filtered.length).toEqual(2);
  });
});
