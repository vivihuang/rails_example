import React, { PropTypes } from 'react'

const Todo = ({ onToggleTodo, onRemoveTodo, id, completed, text }) => {
  const textStyle = (flag) => ({ textDecoration: flag ? 'line-through' : 'none' })

  return (
    <li>
      <i onClick={() => onToggleTodo(id)} style={textStyle(completed)}>{text}</i>
      <i onClick={() => onRemoveTodo(id)} style={{ float: 'right' }}>X</i>
    </li>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
  onRemoveTodo: PropTypes.func.isRequired
}

export default Todo
