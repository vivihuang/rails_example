import { handleActions } from 'redux-actions'
import { isLoggedIn } from '../utils/auth'

const initialState = {
  user: {},
  loggedIn: isLoggedIn()
}

export default handleActions({
  'user login': (state, action) => Object.assign({}, state, {
    user: action.payload,
    loggedIn: true
  }),
  'user logout': (state) => Object.assign({}, state, initialState)
}, initialState)
