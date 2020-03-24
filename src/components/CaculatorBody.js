import React from 'react';
import CaculatorDigitKeys from './CaculatorDigitKeys';
import CaculatorOperatorKeys from './CaculatorOperatorKeys';


const CaculatorBody = () => {
  
    return (
        <div>
           <CaculatorDigitKeys />
           <CaculatorOperatorKeys />
        </div>
    );

}
export { CaculatorBody as default };