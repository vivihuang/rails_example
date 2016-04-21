import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Navigation from '../components/Navigation'
import About from '../components/About'

const routes =
(
  <Route path='/' component={Navigation}>
    <IndexRoute component={App} />
    <Route path='about' component={About} />
  </Route>
)

export default routes
