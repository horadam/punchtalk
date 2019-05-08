import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button';
import { AuthContext } from "../lib/auth"

const UserList = props => {
    const users = useSelector(appstate => appstate.users)
    const { signout } = useContext(AuthContext)

    //  function logout() {
    //     signout()
    //     props.history.push("/login")
    // }

    return (
        <div className="userList">
        <Button variant="contained" color="primary" onClick={signout} >
        Log Out
      </Button>
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