import React from 'react';

export default function ChatForm(){

    const handlingSubmit = (e) => {
        e.preventDefault()

    }

    return(
        <div>
            <form onSubmit={handlingSubmit}>
                <button type="submit">{answer.a}</button>
                <button type="submit">{answer.b}</button>
            </form>
        </div>
    )
}
