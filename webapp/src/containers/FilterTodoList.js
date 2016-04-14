import { connect } from 'react-redux'
import _ from 'lodash'
import TodoList from '../components/TodoList'

export const filterTodo = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ACTIVE':
      return _.filter(state, (s) => !s.completed)
    case 'SHOW_COMPLETED':
      return _.filter(state, (s) => s.completed)
    default:
      return state
  }
}

const mapStateToProps = (state) => (
  { todoList: filterTodo(state.todos, { type: state.filterType }) }
)

const mapDispatchToProps = (dispatch) => (
  {
    onToggleTodo: (id) => dispatch({ type: 'TOGGLE_TODO', id }),
    onRemoveTodo: (id) => dispatch({ type: 'REMOVE_TODO', id })
  }
)

const FilterTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default FilterTodoList
