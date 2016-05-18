import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import login from './login'
import todo from './todo'

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  login,
  todo
})

export default rootReducer
