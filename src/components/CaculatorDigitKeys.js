import React, { useContext } from 'react';
import CaculatorContext from '../context/CaculatorContext';
import { setNumberOne, setNumberTwo } from '../actions/caculator';


const CaculatorDigitKeys = () => {
    const { state, dispatch } = useContext(CaculatorContext);

    const setNumber = (newNumber, { number, set }) => {
        const reg = /^\d{1,}(\.\d{0,6})?$/
        if (number === 0) return dispatch(set(newNumber));
        const combineNumber =number + newNumber;
        console.log(combineNumber)
        if(combineNumber.match(reg)){
            dispatch(set(combineNumber));
        }else{
            dispatch(set(parseFloat(number).toFixed(5)))
        }
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
        <div>
            <button onClick={clickHandler}>1</button>
            <button onClick={clickHandler}>2</button>
            <button onClick={clickHandler}>3</button>
            <button onClick={clickHandler}>4</button>
            <button onClick={clickHandler}>5</button>
            <button onClick={clickHandler}>6</button>
            <button onClick={clickHandler}>7</button>
            <button onClick={clickHandler}>8</button>
            <button onClick={clickHandler}>9</button>
            <button onClick={clickHandler}>0</button>
            <button onClick={clickHandler}>.</button>
        </div>
    );

}
export { CaculatorDigitKeys as default };