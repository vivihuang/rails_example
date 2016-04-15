import { combineReducers } from 'redux'
import _ from 'lodash'
import { routerReducer } from 'react-router-redux'

const fetchData = (state = [], action) => {
  switch (action.type) {
    case 'fetch':
      return {
        data: action.data
      }
    default:
      return {
        data: _.isEmpty(state) ? state : state.data
      }
  }
}

const rootReducer = combineReducers({
  fetchData,
  routing: routerReducer
})

export default rootReducer
