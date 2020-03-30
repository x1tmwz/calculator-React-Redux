import React from 'react';
import CaculatorDigitKeys from './CaculatorDigitKeys';
import CaculatorOperatorKeys from './CaculatorOperatorKeys';
import CaculatorFunctions from './CaculatorFunctions';

const CaculatorBody = () => {
    return (
        <div className="calculator-keypad">
            <CaculatorOperatorKeys />
            <div className="input-keys">
                <CaculatorFunctions />
                <CaculatorDigitKeys />
            </div>
            
        </div>
    );
}
export  default CaculatorBody;