import { createAction } from 'redux-actions'
import fetch from 'isomorphic-fetch'
import { getErrors } from './login'
import { httpHeaders } from '../utils/auth'

const baseUrl = '/api/v1/todos/'

export const fetchTodoData = createAction('fetch todo data', async () =>
  await new Promise((resolve) => {
    fetch(baseUrl, {
      headers: httpHeaders()
    })
    .then((res) => {
      getErrors(res)
      return res.json()
    })
    .then((data) => {
      resolve(data)
    })
  })
)
