import { combineReducers } from 'redux'
import todos from './todos'
import filterType from './filterType'

const todoStore = combineReducers({
  todos,
  filterType
})

export default todoStore
