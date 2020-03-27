const caculatorResult = (numberOne, numberTwo, operator) => {
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);
    switch (operator) {
        case '+':
            return {
                numberOne: (numberOne + numberTwo).toString(),
                numberTwo: 0,
                mathOperator: operator
            }
        case '-':
            return {
                numberOne: (numberOne - numberTwo).toString(),
                numberTwo: 0,
                mathOperator: operator
            }
        case 'X':
            return {
                numberOne: (numberOne * numberTwo).toString(),
                numberTwo: 0,
                mathOperator: operator
            }
        case '÷':
            return {
                numberOne: (numberOne / numberTwo).toString(),
                numberTwo: 0,
                mathOperator: operator
            }
        default:
            console.log('default')
            return {
                numberOne: (numberOne).toString(),
                numberTwo: (numberTwo).toString(),
                mathOperator: operator

            }

    }
}
module.exports = caculatorResult;