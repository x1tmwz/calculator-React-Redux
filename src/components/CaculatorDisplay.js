import React, { useContext, useRef } from 'react';
import CaculatorContext from '../context/CaculatorContext';

const CaculatorDisplay = () => {
    const { state } = useContext(CaculatorContext);
    const display = useRef(null);
    const text = useRef(null);
    const format = (data)=>{
        if(data.length >= 4){
            return new Intl.NumberFormat('en-IN',{style:"decimal", maximumFractionDigits: 6 }).format(data);
        }
        return data;
        
    }
    const scale = () => {
        if (!text.current) return 1;
        if (!display.current) return 1;
        const textSize = text.current.offsetWidth - 50;
        const displaySize = display.current.offsetWidth -50;
        if (textSize >= displaySize) {
           // const charterSize = textSize / (state.numberOne.length+3);
            return displaySize / textSize
        }
        return 1;
    };


    console.log(state);
    return (
        <div className="calculator-display" ref={display} >
            <div className="auto-scaling-text" style={{ transform: `scale(${scale()})` }} ref={text} >
                {state.numberTwo ?  format(state.numberTwo) :format(state.numberOne)}
            </div>

        </div>
    );

}
export { CaculatorDisplay as default };