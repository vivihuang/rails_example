import React, { Component, PropTypes } from 'react'
import { deleteData, modifyData, modifyStatus } from '../../actions'
import { connect } from 'react-redux'
import Link from '../../components/Link'

class Record extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModify = this.handleModify.bind(this)
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

  render() {
    const { item } = this.props
    const itemStyle = (status) => ({ textDecoration: status ? 'line-through' : '' })
    return (
      <div>
        <input type='checkbox' />
        <Link handleClick={this.handleClick}
          item={item}
          text={item.title}
          linkStyle={itemStyle(item.completed)}
        />
        <Link handleClick={this.handleModify} item={item} text='Modify' />
        <Link handleClick={this.handleDelete} item={item} text='Delete' />
      </div>
    )
  }
}

Record.propTypes = {
  item: PropTypes.object.isRequired,
  dispatch: PropTypes.func
}

export default connect()(Record)
