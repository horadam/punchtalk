import io from "socket.io-client"
import store from '../store'

let socket = null

export function connect() {
 socket = io.connect("http://10.68.0.212:3001")

 socket.on('new message', (message) => {
     addMessage(message)
 })
}

export function sendMessage(message) {
    // const username = store.getState().username
    socket.emit("new message", message)
}

export function addMessage(message) {
    store.dispatch({
        type: 'ADD_MESSAGE',
        payload: message
    })
}

// export function createUsername(username) {
//     store.dispatch({
//         type: 'SET_USERNAME',
//         payload: username
//     })
// }