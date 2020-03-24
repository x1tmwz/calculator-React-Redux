
const caculatorResult = require('../selectors/caculatorResult');

const caculatorReducer = (state, action) => {
    switch (action.type) {
        case 'SET_OPERATOR':
            return { ...state, mathOperator: action.mathOperator };
        case 'SET_NUMBER_ONE':
            return { ...state, numberOne: action.number }
        case 'SET_NUMBER_TWO':
            return { ...state, numberTwo: action.number }
        case "CACULATE_ONE_NUMBER":
            return caculatorResult(state.numberOne, state.numberOne, action.mathOperator);
        case 'CACULATE_TWO_NUMBERS':
            return {...caculatorResult(state.numberOne, state.numberTwo, state.mathOperator),mathOperator:""};
        default:
            return state;
    }
}
export { caculatorReducer as default }




