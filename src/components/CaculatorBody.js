import React from 'react';
import CaculatorDigitKeys from './CaculatorDigitKeys';
import CaculatorOperatorKeys from './CaculatorOperatorKeys';
import CaculatorFunctions from './CaculatorFunctions';

const CaculatorBody = () => {
    return (
        <div className="calculator-keypad">
            <div className="input-keys">
                <CaculatorFunctions />
                <CaculatorDigitKeys />
            </div>
            <CaculatorOperatorKeys />
        </div>
    );
}
export  default CaculatorBody;