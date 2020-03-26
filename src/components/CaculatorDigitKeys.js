import React, { useContext } from 'react';
import CaculatorContext from '../context/CaculatorContext';
import { setNumberOne, setNumberTwo } from '../actions/caculator';


const CaculatorDigitKeys = () => {
    const { state, dispatch } = useContext(CaculatorContext);
    const setNumber = (newNumber, { number, set }) => {
        if (number === 0) return dispatch(set(newNumber === '.' ? "0." : newNumber));
        const combineNumber = number + newNumber;
        dispatch(set(combineNumber));
    }
    const clickHandler = (e) => {
        const newNumber = e.target.textContent;
        const isThereOpeator = state.mathOperator;
        if (!isThereOpeator) {
            setNumber(newNumber, { number: state.numberOne, set: setNumberOne });
        } else {
            setNumber(newNumber, { number: state.numberTwo, set: setNumberTwo });
        }
    }
    return (
        <div className="digit-keys">
            <button onClick={clickHandler} className="calculator-key key-0">0</button>
            <button onClick={clickHandler} className="calculator-key key-dot">.</button>
            <button onClick={clickHandler} className="calculator-key key-1">1</button>
            <button onClick={clickHandler} className="calculator-key key-2">2</button>
            <button onClick={clickHandler} className="calculator-key key-3">3</button>
            <button onClick={clickHandler} className="calculator-key key-4">4</button>
            <button onClick={clickHandler} className="calculator-key key-5">5</button>
            <button onClick={clickHandler} className="calculator-key key-6">6</button>
            <button onClick={clickHandler} className="calculator-key key-7">7</button>
            <button onClick={clickHandler} className="calculator-key key-8">8</button>
            <button onClick={clickHandler} className="calculator-key key-9">9</button>
        </div>
    );

}
export { CaculatorDigitKeys as default };