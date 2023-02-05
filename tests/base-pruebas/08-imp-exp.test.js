import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"

describe('08-imp-exp', () => {
    
    test('getHeroeById()', () => {
        const heroeTest = {id: 5,name: 'Wolverine',owner: 'Marvel'};
        const heroe = getHeroeById(5);

        expect(heroe).toEqual(heroeTest);

    })
    test('getHeroeById() con id inexistente', () => {
        const heroeTest = {id: 5,name: 'Wolverine',owner: 'Marvel'};
        const heroe = getHeroeById(10);

        expect(heroe).toBe(undefined);

    })
    test('getHeroesByOwner() - DC', () => {
        const heroesTest = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]
        const heroes = getHeroesByOwner('DC')
        expect(heroes).toEqual(heroesTest);
        expect(heroes.length).toBe(heroesTest.length);
    })
    test('getHeroesByOwner() - Marvel', () => {
        const heroesTest = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]
        const heroes = getHeroesByOwner('Marvel')
        expect(heroes).toEqual(heroesTest);
        expect(heroes.length).toBe(heroesTest.length);
    })
})