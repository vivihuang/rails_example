import React, { PropTypes } from 'react'

const Icon = ({ icon }) => {
  const className = `fa fa-${icon}`
  return (
    <i className={className}></i>
  )
}

Icon.defaultProps = {
  icon: 'adjust'
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon
