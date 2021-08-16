import React, { useEffect, useState } from "react";
import ChatBubble from "../ChatBubble";
import ChatForm from "../ChatForm";
import { fetchResult } from '../../recursion'

export default function ChatView() {

    const [question1, setQuestion1] = useState(false)
    const [question2, setQuestion2] = useState(false)
    const question = ['Do you prefer coffee or tea?', 'Do you want sweet or savory?']

    // Inside of Recursive function, we pass in the variables userResponseOne
    // and userResponseTwo
    const [userResponseOne, setUserResponseOne] = useState(null)
    const [userResponseTwo, setUserResponseTwo] = useState(null)
    const [result, setResult] = useState(null)


    useEffect(() => {
        if (!userResponseOne || !userResponseTwo){
            return
        }
        console.log('I fired!!!')
        fetch = fetchResult(userResponseOne, userResponseTwo)
        setResult(fetch)
    } 
    ,[userResponseOne, userResponseTwo])


    // console.log('>>>>>>>>>', userResponses)

    // const getResponse = (answer) => {
    //     userResponses.push(answer)
    //     console.log('$$$$$$$', answer)
    //     return answer
    // }

    // userResponses.push(99)

    // console.log('<<<<<<<<<<', userResponses)

    return (
        <>
            <div className="">
                <h2>This is the ChatView.  Chat bubbles populate in here. </h2>
                <ChatForm question={ {"label": question[0], "answerA": "Coffee", "answerB": "Tea"} } setQuestion={setQuestion1} setUserResponse={setUserResponseOne} />
                { question1 ? <ChatBubble responses={userResponseOne} /> : <></> }
                { question1 ? <ChatForm question={ {"label": question[1], "answerA": "Sweet", "answerB": "Savory"} } setQuestion={setQuestion2} setUserResponse={setUserResponseTwo} /> : <></>}
                { question2 ? <ChatBubble responses={userResponseTwo} /> : <></> }
                { result ? <ChatBubble responses={result} /> : <></> }

            </div>
        </>
    )
}
