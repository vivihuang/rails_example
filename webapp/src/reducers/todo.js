import { handleActions } from 'redux-actions'

const initialState = {
  items: []
}
export default handleActions({
  'fetch todo data': (state, action) => ({
    items: action.payload
  })
}, initialState)
