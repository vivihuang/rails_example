import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as loginActionCreators from '../../actions/loginActionCreators'

export const fields = ['usernameOrEmail', 'password']

class Login extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      window.location.href = '/'
    }
  }

  render() {
    const { error, handleSubmit, submitting, userLogin,
      fields: { usernameOrEmail, password } } = this.props
    return (
      <form onSubmit={handleSubmit(userLogin)}>
        <div>
          <label>Username</label>
          <div>
            <input type='text' placeholder='Username or Email' {...usernameOrEmail} />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input type='password' placeholder='Password' {...password} />
          </div>
        </div>
        {error && <div>{error}</div>}
        <div>
          <button type='submit' disabled={submitting}>
            {submitting ? <i /> : <i />} Log In
          </button>
        </div>
      </form>
    )
  }
}

Login.propTypes = {
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userLogin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn
})

export default reduxForm({
  form: 'login',
  fields
})(connect(mapStateToProps, loginActionCreators)(Login))
