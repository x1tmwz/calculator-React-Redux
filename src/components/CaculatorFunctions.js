import React, { useContext } from 'react';
import CaculatorContext from '../context/CaculatorContext';
import { setMathOperator } from '../actions/caculator';


const CaculatorFunctions = () => {
    const { state, dispatch } = useContext(CaculatorContext);
    const clickHandler = (e) => {
        const operator = e.target.textContent;
        dispatch(setMathOperator(operator));
    }
    return (
        <div>
            <button onClick={clickHandler}>AC</button>
            <button onClick={clickHandler}>C</button>
            <button onClick={clickHandler}>±</button>
            <button onClick={clickHandler}>%</button>
        </div>


    );

}
export { CaculatorFunctions as default };