import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Login from '../containers/Login'
import { redirectToHomepage, redirectToLogin } from '../utils/auth'

const routes = (
  <Route path='/' component={Navigation}>
    <IndexRoute component={App} onEnter={redirectToLogin} />
    <Route path='login' component={Login} onEnter={redirectToHomepage} />
    <Route path='about' component={About} />
  </Route>
)

export default routes
