import React, { PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { submitLoginValues } from '../../actions/login'

export const fields = ['usernameOrEmail', 'password']

const submitValidation = (values, dispatch) => {
  dispatch(submitLoginValues(values))
}

const Login = ({ fields: { usernameOrEmail, password }, error, handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit(submitValidation)}>
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

Login.propTypes = {
  fields: PropTypes.object.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn
})

const mapDispatchToProps = (dispatch) => ({ dispatch })

export default reduxForm({
  form: 'login',
  fields
}, mapStateToProps, mapDispatchToProps)(Login)
