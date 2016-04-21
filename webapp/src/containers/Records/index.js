import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { modifyData, modifyStatus } from '../../actions'
import InputBox from '../../components/InputBox'
import Record from '../../containers/Record'
import style from './style.scss'

class Records extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleSubmit(text) {
    const { dispatch, modifiedId, records } = this.props
    const modifiedItem = _.filter(records, (record) => record.id === modifiedId)[0]
    dispatch(modifyData(Object.assign({}, modifiedItem, { title: text })))
    dispatch(modifyStatus())
  }

  handleBlur() {
    const { dispatch } = this.props
    dispatch(modifyStatus())
  }

  render() {
    const content = (item) => (
      this.props.modifiedId === item.id
        ? <InputBox onSubmit={this.handleSubmit} id={item.id}
          defaultValue={item.title} onBlur={this.handleBlur}
        />
        : <Record item={item} />
    )
    return (
      <ul className={style.ul}>
        {_.map(this.props.records, (item, index) => (<li key={index}>{content(item)}</li>))}
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
