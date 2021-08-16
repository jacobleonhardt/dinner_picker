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
            <div>
                <form>
                    <label>{question.label}</label>
                    <button type="submit" onClick={(e) => handlingSubmit(e, 0)}>{question.answerA}</button>
                    <button type="submit" onClick={(e) => handlingSubmit(e, 1)}>{question.answerB}</button>
                </form>
            </div>
            <div>
            </div>
        </>
    )
}
