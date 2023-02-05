import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('09-promesas', () => {

    test('getHeroeByIdAsync', (done) => {
        const id = 1;
        const heroeTest = {id: 1,name: 'Batman',owner: 'DC'};

        getHeroeByIdAsync(id)
            .then(heroe => {
                
                expect(heroe).toEqual(heroeTest);
                // Si no se llama el done() el código quedará en espera
                done();
            });
    })

    test('getHeroeByIdAsync - heroe undefined', (done) => {
        const id = 99;
        const heroeTest = {id: 1,name: 'Batman',owner: 'DC'};

        getHeroeByIdAsync(id)
            .then(heroe => {  
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    })

})

