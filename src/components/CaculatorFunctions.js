import React, { useContext } from 'react';
import CaculatorContext from '../context/CaculatorContext';
import { clearAll, clear, setNumberOne, setNumberTwo } from '../actions/caculator';


const CaculatorFunctions = () => {
    const { state, dispatch } = useContext(CaculatorContext);
    const clickClearHandler = (e) => {
        if (state.numberOne && state.mathOperator){
            if(state.clearAll)dispatch(clearAll());
            return dispatch(clear());
        }
        dispatch(clearAll());
    }

    const clickOppsiteHandler = (e) => {
        const isThereOpeator = state.mathOperator;
        if (!isThereOpeator) {
            const oppsiteNumberOne = state.numberOne * -1;
            dispatch(setNumberOne(oppsiteNumberOne));
        }
        else {
            const oppsiteNumberTwo = state.numberTwo * -1;
            dispatch(setNumberTwo(oppsiteNumberTwo))
        }
    }

    const clickPresentHandler = (e) => {
        const isThereOpeator = state.mathOperator;
        if (!isThereOpeator) {
            dispatch(setNumberOne(state.numberOne / 100));
        }
        else {
            dispatch(setNumberTwo(state.numberTwo / 100))
        }

    }
    return (
        <div className="function-keys">
            <button onClick={clickClearHandler} className="calculator-key key-clear">{state.numberOne && !state.clearAll ? 'C' : 'AC'}</button>
            <button onClick={clickOppsiteHandler} className="calculator-key key-sign">±</button>
            <button onClick={clickPresentHandler} className="calculator-key key-percent">%</button>
        </div>


    );

}
export { CaculatorFunctions as default };