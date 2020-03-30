import React from 'react';
import { connect } from 'react-redux'
import { setNumberOne, setNumberTwo } from '../actions/caculator';


class CaculatorDigitKeys extends React.Component {
    setNumber = (newNumber, { number, set }) => {
        if (number === 0) return set(newNumber === '.' ? "0." : newNumber);
        const combineNumber = number + newNumber;
        set(combineNumber);
    }
    clickHandler = (e) => {
        const newNumber = e.target.textContent;
        const isThereOpeator = this.props.mathOperator;
        if (!isThereOpeator) {
            this.setNumber(newNumber, { number: this.props.numberOne, set: this.props.startSetNumberOne });
        } else {
            this.setNumber(newNumber, { number: this.props.numberTwo, set: this.props.startSetNumberTwo });
        }
    }
    render() {
        return (
            <div className="digit-keys">
                <div className="buttons_row">
                    <button onClick={this.clickHandler} className="calculator-key key-1">1</button>
                    <button onClick={this.clickHandler} className="calculator-key key-2">2</button>
                    <button onClick={this.clickHandler} className="calculator-key key-3">3</button>
                </div>
                <div className="buttons_row">
                    <button onClick={this.clickHandler} className="calculator-key key-4">4</button>
                    <button onClick={this.clickHandler} className="calculator-key key-5">5</button>
                    <button onClick={this.clickHandler} className="calculator-key key-6">6</button>
                </div>
                <div className="buttons_row">
                    <button onClick={this.clickHandler} className="calculator-key key-7">7</button>
                    <button onClick={this.clickHandler} className="calculator-key key-8">8</button>
                    <button onClick={this.clickHandler} className="calculator-key key-9">9</button>
                </div>
                <div className="buttons_row">
                    <button onClick={this.clickHandler} className="calculator-key key-0">0</button>
                    <button onClick={this.clickHandler} className="calculator-key key-dot">.</button>
                </div>
            </div>
        );

    }
}
const mapStateToProps = (state) => {
    return { ...state }
}
const mapDispatchToProps = (dispatch) => ({
    startSetNumberOne: (number) => dispatch(setNumberOne(number)),
    startSetNumberTwo: (number) => dispatch(setNumberTwo(number))
})
export default connect(mapStateToProps, mapDispatchToProps)(CaculatorDigitKeys);