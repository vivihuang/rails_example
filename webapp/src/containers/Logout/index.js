import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Link from '../../components/Link'
import { submitToLogout } from '../../actions/login'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { dispatch } = this.props
    dispatch(submitToLogout())
    window.location.reload()
  }

  render() {
    const { loggedIn } = this.props
    return (
      loggedIn ? <Link text='logout' handleClick={this.handleClick} /> : null
    )
  }
}

Logout.propTypes = {
  dispatch: PropTypes.func,
  loggedIn: PropTypes.bool
}

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn
})

const mapDispatchToProps = (dispatch) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
