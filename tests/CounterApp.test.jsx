import {render, screen, fireEvent} from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
describe('CounterApp test', () => {
    const initialValue = 20;

    test('Match con el snapshot', () => {
        const {container} = render(<CounterApp value={initialValue}></CounterApp>)
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el valor inicial de 20', () => {
        render(<CounterApp value={initialValue}></CounterApp>)
        expect(screen.getByText(initialValue)).toBeTruthy();
        // expect(screen.getByRole('heading', {level:2}).innerHTML).toBe(''+valueTest);
    })

    test('Debe de incrementar con el botón +1', () => {
        render(<CounterApp value={initialValue}></CounterApp>)
        fireEvent.click( screen.getByText('+1') );

        expect(screen.getByText(''+(initialValue+1))).toBeTruthy();
    })

    test('Debe de incrementar con el botón -1', () => {
        render(<CounterApp value={initialValue}></CounterApp>)
        fireEvent.click( screen.getByText('-1') );

        expect(screen.getByText(''+(initialValue-1))).toBeTruthy();
    })

    test('Debe de funcionar el botón reset', () => {
        render(<CounterApp value={initialValue}></CounterApp>)
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('-1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', {name:'btn-reset'}) );

        expect(screen.getByText(''+(initialValue))).toBeTruthy();
    })
})