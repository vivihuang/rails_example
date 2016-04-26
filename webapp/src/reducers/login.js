const initialState = {
  user: {},
  loggedIn: false
}

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'login':
      return {
        user: action.user,
        loggedIn: true
      }
    case 'logout':
      return initialState
    default:
      return state
  }
}
