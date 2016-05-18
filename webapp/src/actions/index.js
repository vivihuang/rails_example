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
      getErrors(res)
      return res.json()
    })
    .then((data) => {
      dispatch(receiveData(data))
    })
