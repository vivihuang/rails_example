import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { fetchData } from '../../actions'
import Record from '../Records'
import AddNewData from '../AddNewData'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleRefresh = this.handleRefresh.bind(this)
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  handleRefresh() {
    const { dispatch } = this.props
    dispatch(fetchData())
  }

  render() {
    const { items } = this.props
    let records = _.isEmpty(items)
      ? (<div><h2>Loading...</h2></div>)
      : (<Record records={items} />)

    return (
      <div>
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
  items: PropTypes.array,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(App)