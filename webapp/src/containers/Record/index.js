import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as todoActionCreators from '../../actions/todoActionCreators'
import Link from '../../components/Link'
import Icon from '../../components/Icon'
import style from './style.scss'

class Record extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleModify = this.handleModify.bind(this)
  }

  handleClick(item) {
    this.props.updateTodoData(Object.assign({}, item, { completed: !item.completed }))
  }

  handleDelete(item) {
    this.props.deleteTodoData(item.id)
  }

  handleModify(item) {
    this.props.setDataStatus(item.id)
  }

  render() {
    const { item } = this.props
    const handleClick = this.handleClick
    const checkIcon = `${item.completed ? 'check-square-o' : 'square-o'} ${style.checkIcon}`
    const titleClass = `${style.record} ${item.completed ? style.completed : style.uncompleted}`
    return (
      <div className={style.list}>
        <Icon
          icon={checkIcon}
          handleClick={(e) => {
            e.preventDefault()
            handleClick(item)
          }}
        />
        <p
          className={titleClass}
          onDoubleClick={(e) => {
            e.preventDefault()
            this.handleModify(item)
          }}
        >{item.title}</p>
        <Link handleClick={this.handleDelete} item={item} icon={`times ${style.editIcon}`} />
      </div>
    )
  }
}

Record.propTypes = {
  item: PropTypes.object.isRequired,
  updateTodoData: PropTypes.func.isRequired,
  deleteTodoData: PropTypes.func.isRequired,
  setDataStatus: PropTypes.func.isRequired
}

export default connect(null, todoActionCreators)(Record)
