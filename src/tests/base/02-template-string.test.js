import { getSaludo } from '../../base/02-template-string';

describe('Tests for 02-template-string.js', () => {
  test('getSaludo should return "Hola Alex"', () => {
    const name = 'Alex';

    const greeting = getSaludo(name);
    expect(greeting).toBe(`Hola ${name}!`);
  });

  // getSaludo should return "Hola John!" if the argument is empty
  test('getSaludo should return "Hola John!" if the argument is empty', () => {
    const greeting = getSaludo();
    expect(greeting).toBe('Hola John!')
  })
});
