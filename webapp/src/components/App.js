import React from 'react'
import AddTodo from '../containers/AddTodo'
import FooterList from './FooterList'
import FilterTodoList from '../containers/FilterTodoList'

const App = () => (
    <div style={ { width: '200px', display: 'inline-block' } }>
      <AddTodo />
      <FilterTodoList />
      <FooterList />
    </div>
)

export default App
