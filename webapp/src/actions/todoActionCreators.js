import { createAction } from 'redux-actions'
import * as webApi from '../utils/webApi'

const baseUrl = '/api/v1/todos/'

export const fetchTodoData = createAction('fetch todo data', async () =>
  await new Promise((resolve) => {
    resolve(webApi.fetchData(baseUrl))
  })
)
