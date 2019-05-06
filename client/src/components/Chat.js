import React from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import Messages from './Message'
import Username from './Username'

const Chat = (props) => {
    return (
        <div>
            {
                props.username ? (
                <div>
                    <Form/>
                    <Messages />
                </div>
                ) : (
                    <Username />

                )}
        </div>
    )
}

function mapStateToProps(appState) {
    return {
        username: appState.username
    }
}

export default connect (mapStateToProps) (Chat)