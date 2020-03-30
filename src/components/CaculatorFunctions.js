import React from 'react';
import { connect } from 'react-redux'
import { clearAll, clear, setNumberOne, setNumberTwo,setClearAll } from '../actions/caculator';


const CaculatorFunctions = (props) => {
    const clickClearHandler = (e) => {
        if (props.numberOne && props.mathOperator){
            if(props.clearAll)props.startClearAll();
            props.startSetClearAll(true);
            return props.startClean;
        }
        props.startClearAll();
    }

    const clickOppsiteHandler = (e) => {
        const isThereOpeator = props.mathOperator;
        if (!isThereOpeator) {
            const oppsiteNumberOne = props.numberOne * -1;
            props.startSetNumberOne(oppsiteNumberOne);
        }
        else {
            const oppsiteNumberTwo = props.numberTwo * -1;
            props.startSetNumberTwo(oppsiteNumberTwo)
        }
    }

    const clickPresentHandler = (e) => {
        const isThereOpeator = props.mathOperator;
        if (!isThereOpeator || !props.numberTwo) {
            props.startSetNumberOne(props.numberOne / 100);
        }
        else {
             props.startSetNumberTwo(props.numberTwo / 100);
        }

    }

    return (
        <div className="function-keys">
            <button onClick={clickClearHandler}>{props.numberOne && !props.clearAll ? 'C' : 'AC'}</button>
            <button onClick={clickOppsiteHandler}>±</button>
            <button onClick={clickPresentHandler}>%</button>
        </div>
    );

}
const mapStateToProps =(state)=>({
    ...state
})
const mapDispatchToProps =(dispatch)=>({
    startSetNumberOne:(number)=>dispatch(setNumberOne(number)),
    startSetNumberTwo:(number)=>dispatch(setNumberTwo(number)),
    startClear:()=>dispatch(clear()),
    startSetClearAll:(bool)=>dispatch(setClearAll(bool)),
    startClearAll:()=>dispatch(clearAll())

})
export default connect(mapStateToProps,mapDispatchToProps)(CaculatorFunctions);