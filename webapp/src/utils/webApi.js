import fetch from 'isomorphic-fetch'
import { httpHeaders } from './auth'

export const getErrors = (res) => {
  if (res.status >= 400) {
    throw new Error('Bad response from server')
  }
}

export const fetchData = (url) =>
  fetch(url, {
    headers: httpHeaders()
  })
  .then((res) => {
    getErrors(res)
    return res.json()
  })
