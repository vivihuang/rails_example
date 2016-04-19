import React, { PropTypes } from 'react'

const Icon = ({ icon, handleClick }) => {
  const className = `fa fa-${icon}`
  return (
    <i className={className} onClick={handleClick}></i>
  )
}

Icon.defaultProps = {
  icon: 'adjust'
}

Icon.propTypes = {
  icon: PropTypes.string,
  handleClick: PropTypes.func
}

export default Icon
