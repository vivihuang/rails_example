import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchData } from '../../actions'
import Records from '../Records'
import AddNewData from '../AddNewData'
import style from './style.scss'

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  render() {
    const { items } = this.props
    let records = _.isEmpty(items)
      ? (<div><h2>Loading...</h2></div>)
      : (<Records records={items} />)

    return (
      <div className={style.content}>
        {records}
        <AddNewData />
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    items: state.fetchData.data
  }
)

const mapDispatchToProps = (dispatch) => ({ dispatch })

App.propTypes = {
  items: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
