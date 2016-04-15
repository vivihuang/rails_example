import React, { PropTypes } from 'react'
import { Route, IndexRoute, Link } from 'react-router'
import App from '../containers/App'

const ACTIVE = { color: 'red' }

const SelectLinks = ({ children }) =>
(
  <div>
    <span><Link to='/' activeStyle={ACTIVE}>Homepage</Link></span>
    <span><Link to='/test/users' activeStyle={ACTIVE}>  users</Link></span>
    <span><Link to='/test/users/1' activeStyle={ACTIVE}>  user1</Link></span>
    <span><Link to='/test/about' activeStyle={ACTIVE}>  about</Link></span>
    {children}
  </div>
)

const Users = () =>
(
  <div>
    <h2>Users</h2>
  </div>
)

const User = ({ params }) =>
(
  <div>
    <h3>User {params.id}</h3>
  </div>
)

const About = () =>
(
  <div>
    <h2>About</h2>
  </div>
)

const routes =
(
  <Route path='/' component={ SelectLinks }>
    <IndexRoute component={App} />
    <Route path='test'>
      <Route path='about' component={About} />
      <Route path='users'>
        <IndexRoute component={Users} />
        <Route path=':id' component={User} />
      </Route>
    </Route>
  </Route>
)

SelectLinks.propTypes = {
  children: PropTypes.object.isRequired
}

User.propTypes = {
  params: PropTypes.object
}

export default routes
