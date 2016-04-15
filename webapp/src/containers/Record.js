import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { deleteData, modifyData, modifyStatus } from '../actions'
import InputBox from '../components/InputBox'

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

  handleDelete(id) {
    const { dispatch } = this.props
    dispatch(deleteData(id))
  }

  handleModify(id) {
    const { dispatch } = this.props
    dispatch(modifyStatus(id))
  }

  handleSubmit(text) {
    const { dispatch, modifiedId, records } = this.props
    const modifiedItem = _.filter(records, (record) => record.id === modifiedId)[0]
    dispatch(modifyData(Object.assign({}, modifiedItem, { title: text })))
    dispatch(modifyStatus())
  }

  render() {
    let linkStyle = {
      textDecoration: 'underline',
      color: 'blue',
      cursor: 'pointer'
    }
    const itemStyle = (status) => ({ textDecoration: status ? 'line-through' : '' })
    return (
      <div>
        <ul>
          {_.map(this.props.records, (item, index) => (
            this.props.modifiedId === item.id
              ? (
              <li key={index}>
                <InputBox onSubmit={this.handleSubmit} id={item.id} defaultValue={item.title} />
              </li>)
              : (
              <li key={index}>
                <a onClick={(e) => {
                  e.preventDefault()
                  this.handleClick(item)
                }} style={itemStyle(item.completed)}
                >{item.title}</a>
                {'  '}
                <a onClick={(e) => {
                  e.preventDefault()
                  this.handleModify(item.id)
                }} style={linkStyle}
                >修改</a>
                {'  '}
                <a onClick={(e) => {
                  e.preventDefault()
                  this.handleDelete(item.id)
                }} style={linkStyle}
                >删除</a>
              </li>)
          ))}
        </ul>
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
