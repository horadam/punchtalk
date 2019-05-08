import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import store from '../store'
import Chat from './Chat.js'
import { AuthProvider, AuthRoute } from "../lib/auth"
import Login from "./auth/Login"
import Register from "./auth/Register"
import '../styles/main.css'

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Provider store={store}>
          <Router>
            <div>
              {/* public routes */}
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />

              {/* private routes */}
              <AuthRoute path="/" exact component={Chat} />
            </div>
          </Router>
        </Provider>
      </AuthProvider>
    )
  }
}

export default App
