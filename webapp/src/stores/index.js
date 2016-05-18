import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers/index'

const appStore = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware)
)

export default appStore
