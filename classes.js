class Question {
    constructor(question) {
        this.question = question
        this.yes = null
        this.no = null
    }
}

class Result {
    constructor(result) {
        this.result = result
        this.yes = null
        this.no = null
    }
}

module.exports = {
    Question,
    Result
}
