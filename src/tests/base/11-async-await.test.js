import { getImagen } from '../../base/11-async-await';

describe('Tests for 11-async-await.js', () => {
  test('Should return the URL of the image', async () => {
    const url = await getImagen();

    expect(url.includes('https://')).toBe(true);
  });
});
