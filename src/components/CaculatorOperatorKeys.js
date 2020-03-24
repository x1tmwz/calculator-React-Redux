import React, { useContext } from 'react';
import CaculatorContext from '../context/CaculatorContext';
import { setMathOperator , caculatWithOneNumber,caculatWithTwoNumbers} from '../actions/caculator';


const CaculatorOperatorKeys = () => {
    const { state,dispatch } = useContext(CaculatorContext);
    const clickHandler = (e) => {
        const operator = e.target.textContent;
        if(operator == "="){
            return dispatch(caculatWithTwoNumbers(operator));
        }
        if(state.mathOperator == operator){
           return dispatch(caculatWithOneNumber(operator));
        }
        dispatch(setMathOperator(operator));
    }
    return (
        <div>
            <button onClick={clickHandler}>÷</button>
            <button onClick={clickHandler}>X</button>
            <button onClick={clickHandler}>-</button>
            <button onClick={clickHandler}>+</button>
            <button onClick={clickHandler}>=</button>
        </div>
    );

}
export { CaculatorOperatorKeys as default };