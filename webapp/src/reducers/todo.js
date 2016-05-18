import { handleActions } from 'redux-actions'

const initialState = {
  items: [],
  modifiedId: 0,
  hideCompletedTasks: true
}
export default handleActions({
  'fetch todo data': (state, action) => ({
    items: action.payload
  }),
  'update todo data': (state, action) => ({
    items: state.items.map((item) => (item.id === action.payload.id ? action.payload : item))
  }),
  'delete todo data': (state, action) => ({
    items: state.items.filter((item) => item.id !== action.payload.id)
  }),
  'add todo data': (state, action) => ({
    items: state.items.concat(action.payload)
  }),
  'set todo status': (state, action) => Object.assign({}, state, { modifiedId: action.payload }),
  'set completed tasks status': (state, action) =>
    Object.assign({}, state, { hideCompletedTasks: action.payload })
}, initialState)
