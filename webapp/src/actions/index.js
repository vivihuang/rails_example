import fetch from 'isomorphic-fetch'

const baseUrl = '/api/v1/todos/'

const receiveRedditData = (data) => (
  {
    type: 'fetch',
    data
  }
)

export const fetchRedditData = () =>
  (dispatch) => fetch(baseUrl)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .then((data) => {
      dispatch(receiveRedditData(data))
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
      dispatch(fetchRedditData())
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
      dispatch(fetchRedditData())
    })

export const modifyData = (id, text) =>
  (dispatch) =>
    fetch(baseUrl, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        title: text
      })
    })
    .then((res) => {
      if (res.status >= 400) {
        throw new Error('Bad response from server')
      }
      return res.json()
    })
    .then(() => {
      dispatch(fetchRedditData())
    })
