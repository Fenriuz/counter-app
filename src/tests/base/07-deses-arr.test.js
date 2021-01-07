import { retornaArreglo } from '../../base/07-deses-arr';

describe('Test for 07-deses-arr.js', () => {
  test('It must return a string and a number', () => {
    const [letters, number] = retornaArreglo();

    //expect(arr).toEqual(['ABC', 123]);
    expect(letters).toBe('ABC');
    expect(typeof letters).toBe('string');
    expect(number).toBe(123);
    expect(typeof number).toBe('number');
  });
});
