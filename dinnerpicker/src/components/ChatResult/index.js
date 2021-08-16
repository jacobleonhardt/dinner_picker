import React from "react";

export default function ChatResult({ result }){

    return(
        <div className="block text-left bg-blue-300 p-1 m-1">
            <p>DinnerPicker:</p>
            <p>How about <strong>{ result }</strong>!</p>
        </div>
    )
}
