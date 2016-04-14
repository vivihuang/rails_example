import _ from 'lodash'

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return state.id === action.id
        ? Object.assign({}, state, { completed: !state.completed })
        : state
    case 'REMOVE_TODO':
      _.remove(state, s => s.id === action.id)
      return state
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo({}, action)]
    case 'TOGGLE_TODO':
      return state.map(s => todo(s, action))
    case 'REMOVE_TODO':
      return todo(state, action)
    default:
      return state
  }
}

export default todos
