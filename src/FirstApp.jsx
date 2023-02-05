import  PropTypes from "prop-types";

export function FirstApp({name, age}) {

    // const name = 'Sergio Osorio Angel';

    return (
    <>
        <h1  data-testid="test-saludo">{getSaludo()}, {name}</h1>
        <h2>Edad: {age}</h2>
    </>
    )
}

function getSaludo() {
    return (<>Hola Mundo</>)
}

FirstApp.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
    name: 'Usuario Guess',
    age: 0
}