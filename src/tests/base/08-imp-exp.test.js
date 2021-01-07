import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Tests for 08-imp-exp', () => {
  test('Should return a hero by id', () => {
    const id = 1;
    const hero = getHeroeById(id);

    const heroData = heroes.find((h) => h.id === id);

    expect(hero).toEqual(heroData);
  });
  test('Should return a undefined if the hero does not exist', () => {
    const id = 10;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
  });

  test('Should return a DC heroes array', () => {
    const owner = 'DC';
    const dcHerosData = heroes.filter((hero) => hero.owner === owner);

    const herosByOwner = getHeroesByOwner(owner);

    expect(herosByOwner).toEqual(dcHerosData);
  });

  test('Should return a Marvel heroes array[2]', () => {
    const owner = 'Marvel';

    const lengthHerosByOwner = getHeroesByOwner(owner).length;

    expect(lengthHerosByOwner).toBe(2);
  });
});
