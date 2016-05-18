import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const appStore = (env) => {
  const logger = createLogger()
  const middleware = env === 'development'
    ? applyMiddleware(promiseMiddleware, logger)
    : applyMiddleware(promiseMiddleware)

  return createStore(
    rootReducer,
    middleware
  )
}

export default appStore
