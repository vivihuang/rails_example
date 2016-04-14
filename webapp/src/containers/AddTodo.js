import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let input

let AddTodo = ({ dispatch }) =>
(
  <div>
    <form onSubmit={(event) => {
      event.preventDefault()
      dispatch(addTodo(input.value))
      input.value = ''
    }}
    >
      <input type="text" ref={(node) => { input = node }} />
      <button type="submit">Add todo</button>
    </form>
  </div>
)

AddTodo = connect()(AddTodo)

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddTodo
