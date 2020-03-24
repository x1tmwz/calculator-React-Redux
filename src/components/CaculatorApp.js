import React, { useReducer } from 'react';
import CaculatorDisplay from './CaculatorDisplay';
import CaculatorBody from './CaculatorBody';
import CaculatorContext from '../context/CaculatorContext';
import caculatorReducer from '../reducers/caculator';



const CaculatorApp = (props) => {
    const [state, dispatch] = useReducer(caculatorReducer, props.defaultState);

    return (
        <CaculatorContext.Provider value={{ state, dispatch }}>
            CaculatorApp
            <CaculatorDisplay />
            <CaculatorBody />
        </CaculatorContext.Provider>
    );
}

const defaultState = {
    numberOne: 0,
    mathOperator: '',
    numberTwo: 0,
}

CaculatorApp.defaultProps = {
    defaultState
}

export { CaculatorApp as default };
