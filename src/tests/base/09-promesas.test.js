import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Tests for 09-promesas.js', () => {
  test('Should return a async hero', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroes[0]);
      done();
    });
  });

  test('Should return an error if the hero by id does not exist', (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((err) => {
      expect(err).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
