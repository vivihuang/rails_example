import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as todoActionCreators from '../../actions/todoActionCreators'
import Records from '../Records'
import AddNewData from '../AddNewData'
import style from './style.scss'

class App extends Component {
  componentDidMount() {
    this.props.fetchTodoData()
  }

  render() {
    const { items } = this.props
    let records = _.isEmpty(items)
      ? (<div><h2>Loading...</h2></div>)
      : (<Records records={items} />)

    return (
      <div className={style.content}>
        {records}
        <AddNewData />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.todo.data
  }
)

App.propTypes = {
  items: PropTypes.object,
  fetchTodoData: PropTypes.func.isRequired
}

export default connect(mapStateToProps, todoActionCreators)(App)
