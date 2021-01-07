import { getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Tests for 05-funciones.js', () => {
  test('getUser should return a object', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test('getUsuarioActivo should return a object', () => {
    const name = 'Alex';
    const testActiveUser = {
      uid: 'ABC567',
      username: name,
    };

    const activeUser = getUsuarioActivo(name);
    expect(activeUser).toEqual(testActiveUser);
  });
});
