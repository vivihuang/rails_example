import fetch from 'isomorphic-fetch'
import { getErrors } from './login'

const baseUrl = '/api/v1/todos/'
const authToken = sessionStorage.getItem('authToken')

const receiveData = (data) => (
  {
    type: 'fetch',
    data
  }
)

export const fetchData = () =>
  (dispatch) =>
    fetch(baseUrl, {
      headers: {
        Authorization: authToken
      }
    })
    .then((res) => {
      getErrors(res, dispatch)
      return res.json()
    })
    .then((data) => {
      dispatch(receiveData(data))
    })

export const addNewData = (text) =>
  (dispatch) =>
    fetch(baseUrl, {
      method: 'post',
      headers: {
        Authorization: authToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: text
      })
    })
    .then((res) => {
      getErrors(res, dispatch)
      dispatch(fetchData())
    })

export const deleteData = (id) =>
  (dispatch) =>
    fetch(baseUrl + id, {
      method: 'delete',
      headers: {
        Authorization: authToken
      }
    })
    .then((res) => {
      getErrors(res, dispatch)
      dispatch(fetchData())
    })

export const modifyData = (item) =>
  (dispatch) =>
    fetch(baseUrl + item.id, {
      method: 'put',
      headers: {
        Authorization: authToken,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then((res) => {
      getErrors(res, dispatch)
      dispatch(fetchData())
    })

export const modifyStatus = (id = 0) =>
  (dispatch) => {
    dispatch({ type: 'set', data: id })
  }

export const changeCompletedTasksStatus = (currentStatus) => (
  {
    type: 'switch',
    data: !currentStatus
  }
)
