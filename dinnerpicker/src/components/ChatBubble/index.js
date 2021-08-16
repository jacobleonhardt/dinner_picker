import React from "react";

export default function ChatBubble({ responses }){

    console.log('%%%%%%%%%%%%%%%%', responses)

    return(
        <>
            <div>
                <p>{ responses }</p>
            </div>
        </>
    )
}
