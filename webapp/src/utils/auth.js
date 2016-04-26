const authToken = 'authToken'

export const setAuthToken = (token) => sessionStorage.setItem(authToken, token)

export const isLoggedIn = () => !!sessionStorage.getItem(authToken)

export const httpHeaders = () => ({
  Authorization: sessionStorage.getItem(authToken),
  Accept: 'application/json',
  'Content-Type': 'application/json'
})

export const redirectToLogin = (nextState, replace) => {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export const redirectToHomepage = (nextState, replace) => {
  if (isLoggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
