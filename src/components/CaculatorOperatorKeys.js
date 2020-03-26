import React, { useContext } from 'react';
import CaculatorContext from '../context/CaculatorContext';
import { setMathOperator , caculatWithOneNumber,caculatWithTwoNumbers} from '../actions/caculator';


const CaculatorOperatorKeys = () => {
    const { state,dispatch } = useContext(CaculatorContext);
    const clickHandler = (e) => {
        const operator = e.target.textContent;
        if(operator === "="){
            return dispatch(caculatWithTwoNumbers(operator));
        }
        if(state.numberOne && state.numberTwo && state.mathOperator){
            return dispatch(caculatWithTwoNumbers(operator));
        }
        if(state.mathOperator === operator){
           return dispatch(caculatWithOneNumber(operator));
        }
        dispatch(setMathOperator(operator));
    }
    return (
        <div className="operator-keys">
            <button onClick={clickHandler} className="calculator-key key-divide">÷</button>
            <button onClick={clickHandler} className="calculator-key key-multiply">X</button>
            <button onClick={clickHandler} className="calculator-key key-subtract">-</button>
            <button onClick={clickHandler} className="calculator-key key-add">+</button>
            <button onClick={clickHandler} className="calculator-key key-equals">=</button>
        </div>
    );

}
export { CaculatorOperatorKeys as default };