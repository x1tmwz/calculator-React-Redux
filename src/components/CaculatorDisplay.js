import React,{useContext} from 'react';
import CaculatorContext from '../context/CaculatorContext';

const CaculatorDisplay = ()=>{
    const {state} = useContext(CaculatorContext);
    console.log(state);
    return (
        <div>
              {state.numberTwo ? <p>{state.numberTwo}</p> : <p>{state.numberOne}</p>}
        </div>
    );

}
export {CaculatorDisplay as default};