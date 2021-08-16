import React, { useEffect, useState } from "react";
import ChatBubble from "../ChatBubble";
import ChatForm from "../ChatForm";
import ChatResult from '../ChatResult'
import { fetchResult } from '../../recursion'

export default function ChatView() {

    const [question1, setQuestion1] = useState(false)
    const [question2, setQuestion2] = useState(false)
    const question = ['Do you prefer coffee or tea?', 'Do you want sweet or savory?']

    const [userResponseOne, setUserResponseOne] = useState(null)
    const [userResponseTwo, setUserResponseTwo] = useState(null)
    const [result, setResult] = useState(null)


    useEffect(() => {
        if (!userResponseOne || !userResponseTwo){
            return
        }
        fetch = fetchResult(userResponseOne, userResponseTwo)
        setResult(fetch)
    }
    ,[userResponseOne, userResponseTwo])

    return (
        <>
            <div>
                <h2>Find out what's for dinner in two simple questions.</h2>
                <ChatForm question={ {"label": question[0], "answerA": "Coffee", "answerB": "Tea"} } setQuestion={setQuestion1} setUserResponse={setUserResponseOne} />
                { question1 ? <ChatBubble responses={userResponseOne} /> : <></> }
                { question1 ? <ChatForm question={ {"label": question[1], "answerA": "Sweet", "answerB": "Savory"} } setQuestion={setQuestion2} setUserResponse={setUserResponseTwo} /> : <></>}
                { question2 ? <ChatBubble responses={userResponseTwo} /> : <></> }
                { result ? <ChatResult result={result} /> : <></> }

            </div>
        </>
    )
}
