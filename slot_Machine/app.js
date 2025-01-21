// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require('prompt-sync')()

const ROWS = 3
const COLS = 3

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}

const SYMBOL_VALUES = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}








// Step one --> collect deposit from user
const deposit = () => {
    while (true) {
        const depositAmount = prompt('Enter a deposit amount: ')
        const numberDepositAmount = parseFloat(depositAmount)
        
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log('Invalid deposit amount, try again.')
        } else {
            return numberDepositAmount
        }
    }
}

// Determine number of lines to bet on
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt('Enter the number of lines to bet on (1-3): ')
        const NumberOfLines = parseFloat(lines)
        
        if (isNaN(NumberOfLines) || NumberOfLines <= 0 || NumberOfLines > 3) {
            console.log('Invalid number of lines, try again.')
        } else {
            return NumberOfLines
        }
    }
}

// Collect a bet amount
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt('Enter the bet per line: ')
        const NumberBet = parseFloat(bet)
        
        if (isNaN(NumberBet) || NumberBet <= 0 || NumberBet > balance / lines) {
            console.log('Invalid bet, try again.')
        } else {
            return NumberBet
        }
    }
}

// Spin the slot machine
const spin = () => {
    const symbols = []
    for (const [symbols, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbols)
        }
    }
    
    const reels = [[], [], []]
    for (let i =0; i < COLS; i++) {
        const reelsSymbols = [...symbols]
        for (let j = 0; j < ROWS; j++) {
            
        }
    }
}





let balance = deposit()
const NumberOfLines = getNumberOfLines()
const bet = getBet(balance, NumberOfLines)












//
