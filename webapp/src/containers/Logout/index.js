import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as loginActionCreators from '../../actions/loginActionCreators'
import Link from '../../components/Link'

class Logout extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.userLogout()
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
  userLogout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool
}

const mapStateToProps = (state) => ({
  loggedIn: state.login.loggedIn
})

export default connect(mapStateToProps, loginActionCreators)(Logout)
