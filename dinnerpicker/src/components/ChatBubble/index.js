import React from "react";

export default function ChatBubble({ responses }){

    console.log('%%%%%%%%%%%%%%%%', responses)

    return(
        <>
            <div className="block">
                <p className="bg-green-600">{ responses }</p>
            </div>
        </>
    )
}
