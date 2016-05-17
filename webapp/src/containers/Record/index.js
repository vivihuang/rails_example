import React, { Component, PropTypes } from 'react'
import { modifyData, modifyStatus } from '../../actions'
import { bindActionCreators } from 'redux'
import * as todoActionCreators from '../../actions/todoActionCreators'
import { connect } from 'react-redux'
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
    const { dispatch } = this.props
    dispatch(modifyData(Object.assign({}, item, { completed: !item.completed })))
  }

  handleDelete(item) {
    this.props.actions.deleteTodoData(item.id)
  }

  handleModify(item) {
    const { dispatch } = this.props
    dispatch(modifyStatus(item.id))
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

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: bindActionCreators(todoActionCreators, dispatch)
})

Record.propTypes = {
  item: PropTypes.object.isRequired,
  dispatch: PropTypes.func,
  actions: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(Record)
