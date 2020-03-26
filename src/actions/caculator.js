const setNumberOne = (number) => ({
    type: "SET_NUMBER_ONE",
    number
})
const setNumberTwo = (number) => ({
    type: "SET_NUMBER_TWO",
    number
})
const setMathOperator = (mathOperator) => ({
    type: 'SET_OPERATOR',
    mathOperator
})
const caculatWithOneNumber =(operator)=>({
    type:'CACULATE_WITH_ONE_NUMBER',
    mathOperator:operator
})
const caculatWithTwoNumbers =(operator)=>({
    type:'CACULATE_WITH_TWO_NUMBERS',
    mathOperator:operator
})
const clearAll = ()=>({
    type:'CLEARALL'
})
const clear = ()=>({
    type:'CLEAR'
})
export {
    setNumberOne,
    setNumberTwo,
    setMathOperator,
    caculatWithOneNumber,
    caculatWithTwoNumbers,
    clearAll,
    clear
};