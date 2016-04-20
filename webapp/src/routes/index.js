import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App'
import Navigation from '../components/Navigation'

const routes =
(
  <Route path='/' component={ Navigation }>
    <IndexRoute component={App} />
  </Route>
)

export default routes
