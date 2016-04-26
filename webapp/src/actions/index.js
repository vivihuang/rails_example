import fetch from 'isomorphic-fetch'
import { getErrors } from './login'
import { httpHeaders } from '../utils/auth'

const baseUrl = '/api/v1/todos/'

const receiveData = (data) => (
  {
    type: 'fetch',
    data
  }
)

export const fetchData = () =>
  (dispatch) =>
    fetch(baseUrl, {
      headers: httpHeaders()
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
      headers: httpHeaders(),
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
      headers: httpHeaders()
    })
    .then((res) => {
      getErrors(res, dispatch)
      dispatch(fetchData())
    })

export const modifyData = (item) =>
  (dispatch) =>
    fetch(baseUrl + item.id, {
      method: 'put',
      headers: httpHeaders(),
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
