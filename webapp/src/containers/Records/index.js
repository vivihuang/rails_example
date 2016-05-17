import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import * as todoActionCreators from '../../actions/todoActionCreators'
import { modifyStatus, changeCompletedTasksStatus } from '../../actions'
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
    const { dispatch, modifiedId, records } = this.props
    const modifiedItem = _.filter(records, (record) => record.id === modifiedId)[0]
    this.props.actions.updateTodoData(Object.assign({}, modifiedItem, { title: text }))
    dispatch(modifyStatus())
  }

  handleBlur() {
    const { dispatch } = this.props
    dispatch(modifyStatus())
  }

  handleCompletedTasks() {
    const { dispatch, hideCompletedTasks } = this.props
    dispatch(changeCompletedTasksStatus(hideCompletedTasks))
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
    modifiedId: state.setModifiedId.id,
    hideCompletedTasks: state.hideCompletedTasks.status
  }
)

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: bindActionCreators(todoActionCreators, dispatch)
})

Records.propTypes = {
  records: PropTypes.array.isRequired,
  dispatch: PropTypes.func,
  modifiedId: PropTypes.number,
  hideCompletedTasks: PropTypes.bool,
  actions: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Records)
