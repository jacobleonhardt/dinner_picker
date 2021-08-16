const { Node } = require('./classes')

// Tree Structure
let root = new Node('root', null, 'Coffee', 'Tea')
let coffee = new Node('Coffee', 'root', 'Sweet', 'Savory')
let tea = new Node('Tea', 'root', 'Sweet', 'Savory')
let sweetCoffee = new Node('Sweet', 'Coffee', 'American', null)
let savoryCoffee = new Node('Savory', 'Coffee', 'Italian', null)
let sweetTea = new Node('Sweet', 'Tea', 'Chinese', null)
let savoryTea = new Node('Savory', 'Tea', 'Mexican', null)


// a.yes = 'b'
// a.no = 'c'
// b.yes = 'd'
// b.no = 'e'
// c.yes = 'f'
// c.no = 'g'

export const fetchResult = (input1, input2, node = root) => {
    if (node.right === null) return node.left

    let result;

    if (node.parent === null && node.left === input1) {
       result = fetchResult(input1, input2, node.left)
    }
    else if (node.parent === null && node.right === input1) {
      result = fetchResult(input1, input2, node.right)
    }
    else if (node.right === input2) {
        result = fetchResult(input1, input2, node.right)
    }
    else result = fetchResult(input1, input2, node.left)

    return result
}
