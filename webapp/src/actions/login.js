import fetch from 'isomorphic-fetch'

const baseUrl = '/api/v1/login'

const loginAction = (data) => ({
  type: 'login',
  data
})

const logoutAction = () => ({
  type: 'logout'
})

export const getErrors = (res, dispatch) => {
  if (res.status === 401) {
    sessionStorage.removeItem('authToken')
    dispatch(logoutAction())
  } else if (res.status >= 400) {
    throw new Error('Bad response from server')
  }
}

export const submitLoginValues = (values) =>
  (dispatch) =>
    fetch(baseUrl, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username_or_email: values.usernameOrEmail,
        password: values.password
      })
    })
    .then((res) => {
      getErrors(res, dispatch)
      return res.json()
    })
    .then((data) => {
      sessionStorage.setItem('authToken', data.user.auth_token)
      dispatch(loginAction(data.user))
    })
