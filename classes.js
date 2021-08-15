class Question {
    constructor(question) {
        this.question = question
        this.yes = null
        this.no = null
    }
}

class Result extends Question {
    constructor(question, result) {
        super(question)
        this.result = result
    }
}

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
