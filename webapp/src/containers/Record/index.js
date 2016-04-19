import React, { Component, PropTypes } from 'react'
import { deleteData, modifyData, modifyStatus } from '../../actions'
import { connect } from 'react-redux'
import Link from '../../components/Link'
import style from './style.scss'

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
    const handleClick = this.handleClick
    return (
      <div>
        <input type='checkbox' onChange={(e) => {
          e.preventDefault()
          handleClick(item)
        }}
        />
        <span className={item.completed ? style.completed : style.uncompleted}>{item.title}</span>
        <Link handleClick={this.handleModify} item={item} icon={`pencil ${style.pointer}`} />
        <Link handleClick={this.handleDelete} item={item} icon={`times ${style.pointer}`} />
      </div>
    )
  }
}

Record.propTypes = {
  item: PropTypes.object.isRequired,
  dispatch: PropTypes.func
}

export default connect()(Record)