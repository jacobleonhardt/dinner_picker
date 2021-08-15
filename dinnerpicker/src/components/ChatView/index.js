import React from "react";
import ChatBubble from "../ChatBubble";
import ChatForm from "../ChatForm";

export default function ChatView() {

    return (
        <>
            <div>
                <h2>This is the ChatView.  Chat bubbles populate in here. </h2> 
                <ChatBubble />
                <ChatForm /> 
            </div>
        </>
    )
}