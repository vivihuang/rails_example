import fetch from 'isomorphic-fetch'

const baseUrl = '/api/v1/todos/'

const receiveData = (data) => (
  {
    type: 'fetch',
    data
  }
)

export const fetchData = () =>
  (dispatch) => fetch(baseUrl)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
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
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: text
      })
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      dispatch(fetchData())
    })

export const deleteData = (id) =>
  (dispatch) =>
    fetch(baseUrl + id, {
      method: 'delete'
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      dispatch(fetchData())
    })

export const modifyData = (item) =>
  (dispatch) =>
    fetch(baseUrl + item.id, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
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
