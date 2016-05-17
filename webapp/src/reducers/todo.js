import { handleActions } from 'redux-actions'

const initialState = {
  items: []
}
export default handleActions({
  'fetch todo data': (state, action) => ({
    items: action.payload
  }),
  'update todo data': (state, action) => ({
    items: state.items.map((item) => (item.id === action.payload.id ? action.payload : item))
  }),
  'delete todo data': (state, action) => {{
    console.log(state, action)
    return {
      items: state.items.filter((item) => item.id !== action.payload.id)
    }
  }}
}, initialState)
