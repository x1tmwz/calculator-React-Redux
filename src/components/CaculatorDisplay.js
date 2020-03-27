import React, { useEffect,useState } from 'react';
import { connect } from 'react-redux';

const CaculatorDisplay = ({ numberOne, numberTwo}) => {
    const [scale, setScale] = useState(1);
    const format = (data) => {
        if (data.length >= 4) {
            return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 6 }).format(data);
        }
        return data;
    }
    useEffect(() => {
        const view = document.getElementsByClassName("calculator-display")[0];
        const text = view.lastChild;
        const viewSize = view.getBoundingClientRect()
        const textSize = text.getBoundingClientRect()
        if (textSize.left <= viewSize.left) {
           return setScale(viewSize.width / (textSize.width/scale))
        }
        setScale(1);
    },[numberOne,numberTwo,scale])
    return (
        <div className="calculator-display"  >
            <div className="auto-scaling-text" style={{ transform: `scale(${scale})` }}  >
                {numberTwo ? format(numberTwo) : format(numberOne)}
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    numberOne: state.numberOne,
    numberTwo: state.numberTwo
})
export default connect(mapStateToProps)(CaculatorDisplay);






