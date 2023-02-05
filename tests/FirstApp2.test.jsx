import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Test - FirstApp', () => {

    const name = 'Sergio Osorio Angel';
    const age = 21;

    test('Match con el Snapshot', () => {
        const {container} = render(<FirstApp name={name} age={age}></FirstApp>);
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el nombre en un h1', () => {
        render(<FirstApp name={name} age={age}></FirstApp>);
        expect(screen.getByTestId('test-saludo').innerHTML.trim()).toContain(name);

        // Imprime todo el <body></body> del renderizado alamacenado
        // screen.debug();
    })

    test('Debe mostrar el nombre en un H1', () => {
        render(<FirstApp name={name} age={age}></FirstApp>);
        expect(screen.getByRole('heading', {level:1}).innerHTML).toContain(name);
    })

    test('Debe de mostrar la edad enviada por el prop', () => {
        render(<FirstApp name={name} age={age}></FirstApp>);
        expect(screen.getByRole('heading', {level:2}).innerHTML).toContain(''+age);
    })

})