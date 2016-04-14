import React, { PropTypes } from 'react'
import _ from 'lodash'
import Todo from './Todo'

const TodoList = ({ todoList, onToggleTodo, onRemoveTodo }) => {
  const list = _.isEmpty(todoList) ? [] : todoList
  return (
    <div>
      <ul>
        {list.map((s) => (
          <Todo key={s.id} onToggleTodo={onToggleTodo} onRemoveTodo={onRemoveTodo} {...s} />
        ))}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
}

export default TodoList
