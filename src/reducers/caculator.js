const caculatorResult = require('../selectors/caculatorResult');

const defaultState = {
    numberOne: 0,
    mathOperator: '',
    numberTwo: 0,
    clearAll:false
}
const caculatorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_OPERATOR':
            return { ...state, mathOperator: action.mathOperator };
        case 'SET_NUMBER_ONE':
            return { ...state, numberOne: action.number,clearAll:false }
        case 'SET_NUMBER_TWO':
            return { ...state, numberTwo: action.number,clearAll:false }
        case "CACULATE_WITH_ONE_NUMBER":
            return {
                ...state,
                ...caculatorResult(state.numberOne, state.numberOne, action.mathOperator)};
        case 'CACULATE_WITH_TWO_NUMBERS':
            return {
                ...state,
                 ...caculatorResult(state.numberOne, state.numberTwo, state.mathOperator),
                  mathOperator: action.mathOperator=== '='? '':action.mathOperator};
        case 'CLEARALL': {
            return defaultState;
        }
        case 'CLEAR':{
            return{
                ...state,
                numberTwo:0,
                clearAll:true
            }
        }
        default:
            return state;
    }
}
export { caculatorReducer as default, defaultState }




