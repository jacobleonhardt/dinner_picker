import React, { useEffect, useState } from "react";
import ChatBubble from "../ChatBubble";
import ChatForm from "../ChatForm";

export default function ChatView() {

    const [question2, setQuestion2] = useState(false)
    const [result, setResult] = useState(false)
    const question = ['Do you prefer coffee or tea?', 'Do you want sweet or savory?']

    // Inside of Recursive function, we pass in the variables userResponseOne
    // and userResponseTwo
    const [userResponseOne, setUserResponseOne] = useState(null)
    const [userResponseTwo, setUserResponseTwo] = useState(null)


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
            <div>
                <h2>This is the ChatView.  Chat bubbles populate in here. </h2>
                <ChatForm question={ {"label": question[0], "answerA": "coffee", "answerB": "tea"} } setQuestion={setQuestion2} setUserResponse={setUserResponseOne} />
                { question2 ? <ChatBubble responses={userResponseOne} /> : <></> }
                { question2 ? <ChatForm question={ {"label": question[1], "answerA": "sweet", "answerB": "savory"} } setQuestion={setResult} setUserResponse={setUserResponseTwo} /> : <></>}
                { result ? <ChatBubble responses={userResponseTwo} /> : <></> }

            </div>
        </>
    )
}
