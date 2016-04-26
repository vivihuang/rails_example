import { combineReducers } from 'redux'
import _ from 'lodash'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { login } from './login'

const fetchData = (state = {}, action) => {
  switch (action.type) {
    case 'fetch':
      return {
        data: {
          completedItems: _(action.data).filter(d => (d.completed)).sortBy('id').value(),
          uncompletedItems: _(action.data).filter(d => (!d.completed)).sortBy('id').value()
        }
      }
    default:
      return {
        data: _.isEmpty(state) ? state : state.data
      }
  }
}

const setModifiedId = (state = 0, action) => {
  switch (action.type) {
    case 'set':
      return {
        id: action.data
      }
    default:
      return {
        id: _.isEmpty(state) ? state : state.id
      }
  }
}

const hideCompletedTasks = (state = true, action) => {
  switch (action.type) {
    case 'switch':
      return {
        status: action.data
      }
    default:
      return {
        status: _.isEmpty(state) ? state : state.status
      }
  }
}

const rootReducer = combineReducers({
  fetchData,
  setModifiedId,
  hideCompletedTasks,
  login,
  routing: routerReducer,
  form: formReducer
})

export default rootReducer
