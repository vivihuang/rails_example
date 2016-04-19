import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { modifyData, modifyStatus } from '../../actions'
import InputBox from '../../components/InputBox'
import Record from '../../containers/Record'

class Records extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(text) {
    const { dispatch, modifiedId, records } = this.props
    const modifiedItem = _.filter(records, (record) => record.id === modifiedId)[0]
    dispatch(modifyData(Object.assign({}, modifiedItem, { title: text })))
    dispatch(modifyStatus())
  }

  render() {
    const content = (item, index) => (
      this.props.modifiedId === item.id
        ? (
          <li key={index}>
            <InputBox onSubmit={this.handleSubmit} id={item.id} defaultValue={item.title} />
          </li>
        )
        : (
          <li key={index}>
            <Record item={item} />
          </li>
        )
    )
    return (
      <ul>
        {_.map(this.props.records, (item, index) => (content(item, index)))}
      </ul>
    )
  }
}

const mapStateToProps = (state) => (
  {
    modifiedId: state.setModifiedId.id
  }
)

const mapDispatchToProps = (dispatch) => ({ dispatch })

Records.propTypes = {
  records: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  modifiedId: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Records)