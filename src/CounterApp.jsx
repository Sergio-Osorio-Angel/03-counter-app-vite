import { useState } from 'react';
import  PropTypes from "prop-types";

export function CounterApp({value}) {

    // value sería el valor inicial del hook
    const [counter, setCounter] = useState(value);

    // Si la función utiliza algún prop, debe de ir dentro del functional component
    // De lo contrario, debería de ir fuera del functional component
    function handleAdd(event) {
        setCounter(counter + 1);
    }
    function handleSubstract(event) {
        setCounter(counter -1);
    }
    function handleReset(event) {
        setCounter(value);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2>{counter}</h2>
        {/* <button onClick={ (event) => handleAdd(event)}>+1</button> */}
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubstract }>-1</button>
        <button aria-label='btn-reset' onClick={ handleReset }>Reset</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}