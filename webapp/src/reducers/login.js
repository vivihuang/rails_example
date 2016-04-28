import { isLoggedIn } from '../utils/auth'

const initialState = {
  user: {},
  loggedIn: isLoggedIn()
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        user: action.user,
        loggedIn: true
      }
    case 'logout':
      return state
    default:
      return state

  }
}
