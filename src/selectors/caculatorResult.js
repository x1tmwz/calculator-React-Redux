const caculatorResult = (numberOne, numberTwo, operator) => {
    numberOne = parseFloat(numberOne);
    numberTwo = parseFloat(numberTwo);
    switch (operator) {
        case '+':
            return {
                numberOne: (numberOne + numberTwo),
                numberTwo: 0,
                mathOperator: operator
            }
        case '-':
            return {
                numberOne: (numberOne - numberTwo),
                numberTwo: 0,
                mathOperator: operator
            }
        case 'X':
            return {
                numberOne: (numberOne * numberTwo),
                numberTwo: 0,
                mathOperator: operator
            }
        case '÷':
            return {
                numberOne: (numberOne / numberTwo),
                numberTwo: 0,
                mathOperator: operator
            }
        default:
            console.log('default')
            return {
                numberOne: (numberOne),
                numberTwo: (numberTwo),
                mathOperator: operator

            }

    }
}
module.exports = caculatorResult;