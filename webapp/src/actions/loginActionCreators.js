import { createAction } from 'redux-actions'
import * as webApi from '../utils/webApi'
import { setAuthToken, removeAuthToken } from '../utils/auth'

const loginUrl = '/api/v1/login'
const logoutUrl = 'api/v1/logout'

export const userLogin = createAction('user login', async values => {
  const data = await new Promise((resolve) => {
    resolve(webApi.postData(loginUrl, {
      username_or_email: values.usernameOrEmail,
      password: values.password
    }))
  })
  if (!data.error) {
    setAuthToken(data.user.auth_token)
  }
  return data.user
})

export const userLogout = createAction('user logout', async () => {
  await new Promise((resolve) => {
    resolve(webApi.deleteData(logoutUrl))
  })
  removeAuthToken()
})
