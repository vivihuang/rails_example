import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Navigation from '../components/Navigation'
import About from '../components/About'
import Login from '../containers/Login'
import auth from '../utils/auth'

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const checkAuth = (nextState, replace) => {
  if (auth.loggedIn) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const routes = (
  <Route path='/' component={Navigation}>
    <IndexRoute component={App} onEnter={requireAuth} />
    <Route path='login' component={Login} onEnter={checkAuth} />
    <Route path='about' component={About} />
  </Route>
)

export default routes
