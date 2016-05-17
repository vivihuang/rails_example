import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as todoActionCreators from '../../actions/todoActionCreators'
import InputBox from '../../components/InputBox'

class AddNewData extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(text) {
    this.props.addTodoData(text)
  }

  render() {
    return (<InputBox onSubmit={this.handleSubmit} />)
  }
}

AddNewData.propTypes = {
  addTodoData: PropTypes.func.isRequired
}

export default connect(null, todoActionCreators)(AddNewData)
