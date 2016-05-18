import { createAction } from 'redux-actions'
import * as webApi from '../utils/webApi'

const baseUrl = '/api/v1/todos/'

export const fetchTodoData = createAction('fetch todo data', async () => {
  const data = await new Promise((resolve) => resolve(webApi.getData(baseUrl)))
  return data.todos
})

export const updateTodoData = createAction('update todo data', async item => {
  const data = await new Promise((resolve) =>
    resolve(webApi.updateData(baseUrl + item.id, item))
  )
  return data.todo
})

export const deleteTodoData = createAction('delete todo data', async id => {
  const data = await new Promise((resolve) =>
    resolve(webApi.deleteData(baseUrl + id))
  )
  return data.todo
})

export const addTodoData = createAction('add todo data', async text => {
  const data = await new Promise((resolve) =>
    resolve(webApi.postData(baseUrl, { title: text }))
  )
  return data.todo
})

export const setDataStatus = createAction('set todo status', (modifiedId = 0) => modifiedId)

export const setCompletedTasksStatus = createAction('set completed tasks status', status => status)
