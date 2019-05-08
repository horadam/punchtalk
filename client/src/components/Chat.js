import React, { useEffect } from 'react'
import { connect } from "../actions/actions"
import ChatArea from './ChatArea'
import ChannelList from './ChannelList'
// import Form from './Form'
// import Messages from './Message'
// import Username from './Username'

const Chat = props => {

    useEffect(() => {
        connect()
    }, [])

    // function logout() {
    //     signout()
    //     props.history.push("/login")
    // }
    
    
    return (
        <div className="mainChatRoom">
            <ChannelList />
            <ChatArea />
            {/* <button onClick={logout}>Logout</button> */}
            <div className="userList"></div>
        </div>
    )
}


export default Chat