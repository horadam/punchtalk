import React, { useEffect, useContext } from 'react'
import { connect } from "../actions/actions"
import ChatArea from './ChatArea'
import ChannelList from './ChannelList'
import { AuthContext } from "../lib/auth"
import UserList from './UserList'


const Chat = props => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        connect(user)
    }, [user])

    // function logout() {
    //     signout()
    //     props.history.push("/login")
    // }
    
    
    return (
        <div className="mainChatRoom">
            <ChannelList />
            <ChatArea />
            {/* <button onClick={logout}>Logout</button> */}
            <UserList />
        </div>
    )
}


export default Chat