import React, { useEffect, useState } from 'react';
import ChatBubble from '../ChatBubble';

export default function ChatForm({ question, setQuestion, setUserResponse }){

    const handlingSubmit = (e, value) => {
        e.preventDefault()
        // console.log('##########', userResponses)
        // userResponses.push(value)
        setUserResponse(value)
        // console.log('@@@@@@@@@', userResponses)
        setQuestion(true)
        return
    }

    // useEffect(() => {
    //     setToggle(false)
    // }, [userResponses])

    return(
        <>
            <div className="block bg-blue-200 flex-row max-w-md justify-center text-center">
                <form>
                    <div className="block">
                        <label>{question.label}</label>
                    </div>
                    <div className="block">
                        <button type="submit" onClick={(e) => handlingSubmit(e, question.answerA)}
                        className="p-1 m-1 font-sans bg-blue-400 hover:bg-blue-600 ring-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">{question.answerA}</button>
                        <button type="submit" onClick={(e) => handlingSubmit(e, question.answerB)}
                        className="p-1 m-1 font-sans bg-blue-400 hover:bg-blue-600 ring-0 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">{question.answerB}</button>
                    </div>
                </form>
            </div>
            <div>
            </div>
        </>
    )
}
