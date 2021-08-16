const { Node } = require('./classes')

// Tree Structure
let root = new Node('root', null)
let coffee = new Node('Coffee', root)
let tea = new Node('Tea', root)
let sweetCoffee = new Node('Sweet', coffee)
let savoryCoffee = new Node('Savory', coffee)
let sweetTea = new Node('Sweet', tea)
let savoryTea = new Node('Savory', tea)

root.left = coffee
root.right = tea
coffee.left = sweetCoffee
coffee.right = savoryCoffee
tea.left = sweetTea
tea.right = savoryTea
sweetCoffee.left = 'American'
savoryCoffee.left = 'Italian'
sweetTea.left = 'Chinese'
savoryTea.left = 'Mexican'

export const fetchResult = (input1, input2, node = root) => {
    if (node.right === null) return node.left

    let result;

    if (node.parent === null && node.left.value === input1) {
       result = fetchResult(input1, input2, node.left)
    }
    else if (node.parent === null && node.right.value === input1) {
      result = fetchResult(input1, input2, node.right)
    }
    else if (node.right.value === input2) {
        result = fetchResult(input1, input2, node.right)
    }
    else result = fetchResult(input1, input2, node.left)

    return result
}
