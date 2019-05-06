import React, { useState } from 'react'
import { send } from '../actions/actions';

export default (props) => {
    const [text, setText] = useState ('')

    function sendMessage (e) {
        e.preventDefault()

        send(text)
        setText("")
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <input type="text"
                placeholder="message" 
                value = {text}
                onChange= {e => setText(e.target.value)}></input>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}