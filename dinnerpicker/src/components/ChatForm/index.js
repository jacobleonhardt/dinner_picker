import React, { useEffect, useState } from 'react';

export default function ChatForm({ question, setQuestion, setUserResponse }){

    const [answered, setAnswered] = useState(false)

    const handlingSubmit = (e, value) => {
        e.preventDefault()
        setUserResponse(value)
        setQuestion(true)
        setAnswered(true)
        return
    }

    return(

            <div className="block flex-row max-w-md justify-center text-center m-1">
                <form>
                    <div className="block text-left bg-blue-200 p-1">
                        <p>DinnerPicker:</p>
                        <label>{question.label}</label>
                    </div>
                     { answered ? <></> : <div className="block text-right">
                        <button type="submit" onClick={(e) => handlingSubmit(e, question.answerA)}
                        className="p-1 mt-1 ml-1 font-sans bg-blue-400 hover:bg-blue-600 ring-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">{question.answerA}</button>
                        <button type="submit" onClick={(e) => handlingSubmit(e, question.answerB)}
                        className="p-1 mt-1 ml-1 font-sans bg-blue-400 hover:bg-blue-600 ring-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">{question.answerB}</button>
                    </div>}
                </form>
            </div>

    )
}
