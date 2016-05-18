import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as todoActionCreators from '../../actions/todoActionCreators'
import InputBox from '../../components/InputBox'
import Record from '../../containers/Record'
import style from './style.scss'

class Records extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleCompletedTasks = this.handleCompletedTasks.bind(this)
  }

  handleSubmit(text) {
    const { modifiedId, records } = this.props
    const modifiedItem = _.filter(records, (record) => record.id === modifiedId)[0]
    this.props.updateTodoData(Object.assign({}, modifiedItem, { title: text }))
    this.props.setDataStatus()
  }

  handleBlur() {
    this.props.setDataStatus()
  }

  handleCompletedTasks() {
    const { hideCompletedTasks } = this.props
    this.props.setCompletedTasksStatus(hideCompletedTasks)
  }

  render() {
    const { modifiedId, hideCompletedTasks, records } = this.props
    const completedItems = _(records)
      .filter(d => (d.completed))
      .sortBy('id')
      .value()
    const uncompletedItems = _(records)
      .filter(d => (!d.completed))
      .sortBy('id')
      .value()
    const content = (item) => (
      modifiedId === item.id && !item.completed
        ? <InputBox
          onSubmit={this.handleSubmit}
          id={item.id}
          defaultValue={item.title}
          onBlur={this.handleBlur}
        />
        : <Record item={item} />
    )
    return (
      <div>
        <ul className={style.ul}>
          {_.map(uncompletedItems, (item, index) => (<li key={index}>{content(item)}</li>))}
        </ul>
        <div className={style.completedLink}>
          <a onClick={this.handleCompletedTasks}>
            {hideCompletedTasks ? 'View' : 'Hide'} completed tasks ({completedItems.length})
          </a>
        </div>
        <ul className={style.ul} hidden={hideCompletedTasks}>
          {_.map(completedItems, (item, index) => (<li key={index}>{content(item)}</li>))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    modifiedId: state.todo.modifiedId,
    hideCompletedTasks: state.todo.hideCompletedTasks
  }
)

Records.propTypes = {
  records: PropTypes.array.isRequired,
  modifiedId: PropTypes.number,
  hideCompletedTasks: PropTypes.bool,
  updateTodoData: PropTypes.func.isRequired,
  setDataStatus: PropTypes.func.isRequired,
  setCompletedTasksStatus: PropTypes.func.isRequired
}

export default connect(mapStateToProps, todoActionCreators)(Records)
