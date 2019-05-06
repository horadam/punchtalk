import React, { useState } from 'react'
import { createUsername } from '../actions/actions'

export default (props) => {
    const [username, setUsername] = useState('')

    function sendUsername (e) {
        e.preventDefault()
        createUsername(username)
    }

    return (
        <form onSubmit={sendUsername}>
            <input 
                type="text"
                value={username}
                placeholder="Enter a username"
                onChange={e => setUsername(e.target.value)}
            />
            <button type="submit">Set username</button>
            
        </form>
    )
}