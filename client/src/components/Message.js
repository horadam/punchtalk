import React from 'react'
import { connect } from 'react-redux'

const Messages = (props) => {
    return (
        <ul>
            {props.messages.map((message, i) => (
                <li key={'message'+i} >{message.username}: {message.text}</li>
            ))}
        </ul>
    )
}

function mapStateToProps(appState) {
    return {
        messages: appState.messages
    }
}

export default connect (mapStateToProps) (Messages)