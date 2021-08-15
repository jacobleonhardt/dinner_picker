const { Question, Result } = require('./classes')

// Tree Structure
let a = new Question('Coffee or Tea?')
let b = new Question('Savory or Sweet?')
let c = new Question('Spices?')
let d = new Result('American')
let e = new Result('Italian')
let f = new Result('Mexican')
let g = new Result('Chinese')

a.yes = 'b'
a.no = 'c'
b.yes = 'd'
b.no = 'e'
c.yes = 'f'
c.no = 'g'

const dinnerPicker = async (node = a, userInput) => {
    if (node.type === 'result') {
        return node.result
    }

    if (userInput === 'yes') {
        // if yes, we need to display the question to the left
        // of the current node and recurse, but we need the user input
    }
}
