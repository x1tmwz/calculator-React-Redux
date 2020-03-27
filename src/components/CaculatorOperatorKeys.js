import React from 'react';
import { connect } from 'react-redux'
import { setMathOperator , caculatWithOneNumber,caculatWithTwoNumbers} from '../actions/caculator';



const CaculatorOperatorKeys = (props) => {
  
    const clickHandler = (e) => {
        const operator = e.target.textContent;
        if(operator === "="){
            return props.startCaculatWithTwoNumbers(operator);
        }
        if(props.numberOne && props.numberTwo && props.mathOperator){
            return props.startCaculatWithTwoNumbers(operator);
        }
        if(props.mathOperator === operator){
           return props.startCaculatWithOneNumber(operator);
        }
        props.startSetMathOperator(operator);
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
const mapStateToProps =(state)=>({
    ...state
})
const mapDispatchToProps =(dispatch)=>({
    startSetMathOperator:(operator)=>dispatch(setMathOperator(operator)),
    startCaculatWithOneNumber:(operator)=>dispatch(caculatWithOneNumber(operator)),
    startCaculatWithTwoNumbers:(operator)=>dispatch(caculatWithTwoNumbers(operator))
})
export default connect(mapStateToProps,mapDispatchToProps)(CaculatorOperatorKeys);