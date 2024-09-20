import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        //console.log(event)
        setCounter( counter + 1);
        //setCounter( (c) => c + 1)
    };

    const handleSubs = () => {
        //console.log(event)
        setCounter( counter - 1);
        //setCounter( (c) => c + 1)
    };

    const handlereset = () => {
        //console.log(event)
        setCounter( value );
        //setCounter( (c) => c + 1)
    };

    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleSubs }>-1</button>
            <button onClick={ handlereset }>Reset</button>
        </>
    );
};

CounterApp.prototypes = {
    value: PropTypes.number,
};

CounterApp.defaultProps = {
    value: 1,
};
