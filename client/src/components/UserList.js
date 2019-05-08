import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const UserList = props => {
    const users = useSelector(appstate => appstate.users)

    return (
        <div className="userList">
            <List>
                {users.map((user, i) => (
                    <ListItem key={"user" + i}>
                        <ListItemText primary={user.user} />
                    </ListItem>
                ))}
            </List>
        </div>
)} 

export default UserList