import React, { useEffect, useState } from 'react';
import ChatBubble from '../ChatBubble';

export default function ChatForm({ question, setQuestion2 }){

    const userResponses = []
    let toggle = false

    const handlingSubmit = (e, value) => {
        e.preventDefault()
        console.log('##########', userResponses)
        userResponses.push(value)
        console.log('@@@@@@@@@', userResponses)
        toggle = true
        setQuestion2(true)
        return userResponses
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
