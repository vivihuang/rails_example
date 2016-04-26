import fetch from 'isomorphic-fetch'
import { fetchData } from './index'
import { setAuthToken, httpHeaders } from '../utils/auth'

const baseUrl = '/api/v1/login'

const loginAction = (data) => ({
  type: 'login',
  data
})

const logoutAction = () => ({
  type: 'logout'
})

export const getErrors = (res) => {
  if (res.status >= 400) {
    throw new Error('Bad response from server')
  }
}

export const submitLoginValues = (values) =>
  (dispatch) =>
    fetch(baseUrl, {
      method: 'post',
      headers: httpHeaders(),
      body: JSON.stringify({
        username_or_email: values.usernameOrEmail,
        password: values.password
      })
    })
    .then((res) => {
      getErrors(res)
      return res.json()
    })
    .then((data) => {
      if (!data.error) {
        setAuthToken(data.user.auth_token)
      }
      dispatch(loginAction(data.user))
      dispatch(fetchData())
    })
