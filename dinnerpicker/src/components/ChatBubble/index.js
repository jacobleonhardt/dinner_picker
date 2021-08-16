import React from "react";

export default function ChatBubble({ responses }){

    return(
        <div className="block bg-green-300 text-right m-1">
            <p className="p-1">{ responses }</p>
        </div>
    )
}
