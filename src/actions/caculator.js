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
    type:'CACULATE_ONE_NUMBER',
    mathOperator:operator
})
const caculatWithTwoNumbers =()=>({
    type:'CACULATE_TWO_NUMBERS'
})
export {
    setNumberOne,
    setNumberTwo,
    setMathOperator,
    caculatWithOneNumber,
    caculatWithTwoNumbers
};