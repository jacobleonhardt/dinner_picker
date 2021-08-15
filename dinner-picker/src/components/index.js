import React, { useState } from 'react'
import { Question, Result } from './classes'


const DinnerPicker = () => {

    const [text, setText] = useState('')

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

const askQuestion = async (node = a, userInput) => {
    if (node.type === 'result') {
        return node.result
    }

    if (userInput === 'yes') {
        setText(node.question)
        askQuestion()
    }
}

    return (
        <div id='text-box'>
            <div>{text}</div>
        </div>
    )
}

export default DinnerPicker
