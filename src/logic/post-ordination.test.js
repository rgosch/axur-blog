import { ordinatePosts } from './post-ordination';

describe('[Logic] post-ordination > ordinatePosts', () => {
  const posts = [
    { metadata: { publishedAt: 1431006432000 } },
    { metadata: { publishedAt: 1492004832000 } },
    { metadata: { publishedAt: 1490010372000 } },
    { metadata: { publishedAt: 1470166495000 } },
    { metadata: { publishedAt: 1516184567000 } },
  ];

  it('Should ordinate correctly by asc', () => {
    const ordinated = ordinatePosts(posts, 'asc');

    expect(ordinated[0].metadata.publishedAt).toEqual(1431006432000);
    expect(ordinated[1].metadata.publishedAt).toEqual(1470166495000);
  });

  it('Should ordinate correctly by desc', () => {
    const ordinated = ordinatePosts(posts, 'desc');

    expect(ordinated[0].metadata.publishedAt).toEqual(1516184567000);
    expect(ordinated[1].metadata.publishedAt).toEqual(1492004832000);
  });
});
