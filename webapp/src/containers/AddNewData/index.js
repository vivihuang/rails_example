import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import InputBox from '../../components/InputBox'
import { addNewData } from '../../actions'

class AddNewData extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(text) {
    const { dispatch } = this.props
    dispatch(addNewData(text))
  }

  render() {
    return (<InputBox onSubmit={this.handleSubmit} />)
  }
}

AddNewData.propTypes = {
  dispatch: PropTypes.func
}

export default connect()(AddNewData)
