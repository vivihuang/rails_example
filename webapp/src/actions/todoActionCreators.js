import { createAction } from 'redux-actions'
import * as webApi from '../utils/webApi'

const baseUrl = '/api/v1/todos/'

export const fetchTodoData = createAction('fetch todo data', async () =>
  await new Promise((resolve) => {
    resolve(webApi.getData(baseUrl))
  })
)

export const updateTodoData = createAction('update todo data', async item =>
  await new Promise((resolve) => {
    resolve(webApi.updateData(baseUrl + item.id, item))
  })
)

export const deleteTodoData = createAction('delete todo data', async id =>
  await new Promise((resolve) => {
    resolve(webApi.deleteData(baseUrl + id))
  })
)

export const addTodoData = createAction('add todo data', async text =>
  await new Promise((resolve) => {
    resolve(webApi.addData(baseUrl, { title: text }))
  })
)
