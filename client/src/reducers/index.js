const initialState = {
  messages: [],
  username:""
}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
    return {...state, messages: [...state.messages, action.payload]}

    case "SET_USERNAME":
    return {...state, username: action.payload}
    default:
      return state
  }
}