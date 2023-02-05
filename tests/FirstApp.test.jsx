import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test - FirstApp', () => {

    test('Match con el Snapshot', () => {
        const {container} = render(<FirstApp name='Sergio Osorio Angel' age={21}></FirstApp>);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el nombre en un h1', () => {
        const name = 'Sergio Osorio Angel';
        const {container, getByText, getByTestId} = render(<FirstApp name={name} age={21}></FirstApp>);

        // Este expect es para que un elemento HTML contenga unicamente el valor de la variable
        // expect(getByText(name)).toBeTruthy();

        // la constante container, tiene directamente todo el DOM
        // Por lo que se puede utlizar todas las funciones de JS en el DOM 
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML.trim()).toContain(name);

        // getByTestId con el atributo data-testid del html
        expect(getByTestId('test-saludo').innerHTML.trim()).toContain(name);
    })

    

})