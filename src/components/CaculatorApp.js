import React, { useReducer } from 'react';
import CaculatorDisplay from './CaculatorDisplay';
import CaculatorBody from './CaculatorBody';
import CaculatorContext from '../context/CaculatorContext';
import caculatorReducer, { defaultState } from '../reducers/caculator';



const CaculatorApp = (props) => {
    const [state, dispatch] = useReducer(caculatorReducer, props.defaultState);

    return (
        <CaculatorContext.Provider value={{ state, dispatch }}>
            <div id="wrapper">
                <div id="app">
                    <div className="calculator">
                        <CaculatorDisplay />
                        <CaculatorBody />
                    </div>

                </div>
            </div>
        </CaculatorContext.Provider>
    );
}

CaculatorApp.defaultProps = {
    defaultState
}

export { CaculatorApp as default };
