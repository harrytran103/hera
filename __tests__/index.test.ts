import { giin } from '../src';

test('giin Test', async() => {
  const data = await giin({
    option: {
      url: 'https://graphqlzero.almansi.me/api'
    },
    query: `
      query {
        post(id: $id) {
          id
          title
          body
        }
      }
    `,
    variables: {
      id: 1
    }
  });
  const { post } = data;
  expect(post.id).toEqual('1');
  expect(typeof post.title).toEqual('string');
  expect(typeof post.body).toEqual('string');
});