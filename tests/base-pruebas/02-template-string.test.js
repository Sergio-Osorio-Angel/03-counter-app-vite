import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-string.test.js', () => { 
    
    test('getSaludo()', () => { 
        const name = "Sergio";
        const msg = getSaludo(name);

        // expect(valorObtenido).toBe(valorEsperado)
        expect(msg).toBe(`Hola ${name}`)
    })
})

