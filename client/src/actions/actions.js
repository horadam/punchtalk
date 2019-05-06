import io from "socket.io-client"
import store from '../store'

const socket = io.connect("http://10.68.0.212:3001")
console.log(socket)

export function send(text) {
    const username = store.getState().username
    socket.emit("new message", {
        text: text,
        username: username
    })
}

export function createUsername(username) {
    store.dispatch({
        type: 'SET_USERNAME',
        payload: username
    })
}

socket.on('new message', message => {

    store.dispatch({
        type: "ADD_MESSAGE",
        payload: message
    })
})