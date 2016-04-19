import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { deleteData, modifyData, modifyStatus } from '../actions'
import InputBox from '../components/InputBox'
import Link from '../components/Link'

class Record extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModify = this.handleModify.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(item) {
    const { dispatch } = this.props
    dispatch(modifyData(Object.assign({}, item, { completed: !item.completed })))
  }

  handleDelete(item) {
    const { dispatch } = this.props
    dispatch(deleteData(item.id))
  }

  handleModify(item) {
    const { dispatch } = this.props
    dispatch(modifyStatus(item.id))
  }

  handleSubmit(text) {
    const { dispatch, modifiedId, records } = this.props
    const modifiedItem = _.filter(records, (record) => record.id === modifiedId)[0]
    dispatch(modifyData(Object.assign({}, modifiedItem, { title: text })))
    dispatch(modifyStatus())
  }

  render() {
    const itemStyle = (status) => ({ textDecoration: status ? 'line-through' : '' })
    const modifyBox = (item, index) => (
      <div key={index}>
        <InputBox onSubmit={this.handleSubmit} id={item.id} defaultValue={item.title} />
      </div>
    )
    const showBox = (item, index) => (
      <div key={index}>
        <Link handleClick={this.handleClick}
          item={item}
          text={item.title}
          linkStyle={itemStyle(item.completed)}
        />
        <Link handleClick={this.handleModify} item={item} text='Modify' />
        <Link handleClick={this.handleDelete} item={item} text='Delete' />
      </div>
    )
    const content = (item, index) => (
      this.props.modifiedId === item.id ? modifyBox(item, index) : showBox(item, index)
    )
    return (
      <div>
        {_.map(this.props.records, (item, index) => (content(item, index)))}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    modifiedId: state.setModifiedId.id
  }
)

const mapDispatchToProps = (dispatch) => ({ dispatch })

Record.propTypes = {
  records: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  modifiedId: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(Record)
