import React from "react";

export default function ChatBubble({ responses }){

    console.log('%%%%%%%%%%%%%%%%', responses)

    return(
        <div className="block bg-green-300 text-right">
            <p className="">{ responses }</p>
        </div>
    )
}
