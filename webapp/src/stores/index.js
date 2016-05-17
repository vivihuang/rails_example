import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers/index'

const appStore = createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware)
)

export default appStore
