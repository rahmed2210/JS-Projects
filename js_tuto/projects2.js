const prompt = require('prompt-sync')()

const number1 = parseFloat(prompt('Enter number 1: '))
const operator = prompt('Enter sign: ')
const number2 = parseFloat(prompt('Enter number 2: '))


let result
let valid = true

switch(operator) {
    case '+':
        result = number1 + number2
        break
    case '-':
        result = number1 - number2
        break
    case '*':
        result = number1 * number2
        break
    case '/':
        result = number1 / number2
        break
    default:
        console.log('Invalid')
        valid = false
        break
}


if (valid) console.log(result)




















//
