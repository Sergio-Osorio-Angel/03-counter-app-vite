import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('11-async-await', () => {

    test('getImagen()', async() => {
        const apiKey = 'YVUEBToya77CxWfY9LnQOQYfh6Rc6BME';
        const apiURL = 'http://api.giphy.com/v1/gifs/random?api_key='+apiKey;
 
        const url = await getImagen();
        console.log(url); 

        expect(typeof url).toBe('string');
        
    })

})