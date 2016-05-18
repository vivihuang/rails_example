import fetch from 'isomorphic-fetch'
import { httpHeaders } from './auth'

export const getErrors = (res) => {
  if (res.status >= 400) {
    throw new Error('Bad response from server')
  }
}

export const getData = (url) =>
  fetch(url, {
    headers: httpHeaders()
  })
  .then((res) => {
    getErrors(res)
    return res.json()
  })

export const updateData = (url, body) =>
  fetch(url, {
    method: 'put',
    headers: httpHeaders(),
    body: JSON.stringify(body)
  })
  .then((res) => {
    getErrors(res)
    return res.json()
  })

export const deleteData = (url) =>
  fetch(url, {
    method: 'delete',
    headers: httpHeaders()
  })
  .then((res) => {
    getErrors(res)
    return res.json()
  })

export const postData = (url, body) =>
  fetch(url, {
    method: 'post',
    headers: httpHeaders(),
    body: JSON.stringify(body)
  })
  .then((res) => {
    getErrors(res)
    return res.json()
  })
