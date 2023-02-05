import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('05-funciones', () => { 
    test('getUser()', () => {
        const testUser = {uid: 'ABC123',username: 'El_Papi1502'}

        const user = getUser();

        expect(user).toEqual(testUser);
    })

    test('getUsuarioActivo()', () => {
        const name = 'Sergio';
        const userTest = {uid: 'ABC567',username: name};
        const user = getUsuarioActivo(name);

        expect(user).toEqual(userTest);

    })
})