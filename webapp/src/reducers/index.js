import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { formReducer } from 'redux-form'
import { login } from './login'
import todo from './todo'

const rootReducer = combineReducers({
  login,
  routing: routerReducer,
  form: formReducer,
  todo
})

export default rootReducer
