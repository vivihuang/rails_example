import fetch from 'isomorphic-fetch'
import { fetchData } from './index'
import { setAuthToken, removeAuthToken, httpHeaders } from '../utils/auth'

const loginUrl = '/api/v1/login'
const logoutUrl = 'api/v1/logout'

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

export const submitToLogin = (values) =>
  (dispatch) =>
    fetch(loginUrl, {
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

export const submitToLogout = () =>
  (dispatch) =>
    fetch(logoutUrl, {
      method: 'delete',
      headers: httpHeaders()
    })
    .then((res) => {
      getErrors(res)
      return res.json()
    })
    .then(() => {
      removeAuthToken()
      dispatch(logoutAction())
    })
