import React, { PropTypes } from 'react'

const linkStyle = (currentFilterType, elementFilterType) => (
  {
    pointerEvents: currentFilterType === elementFilterType ? 'none' : 'all',
    textDecoration: currentFilterType === elementFilterType ? 'none' : 'underline'
  }
)

const Link = ({ currentFilterType, elementFilterType, onClickFilter, children }) =>
(
  <a onClick={(event) => {
    event.preventDefault()
    onClickFilter()
  }} style={linkStyle(currentFilterType, elementFilterType)}
  >{children}
  </a>
)

Link.propTypes = {
  currentFilterType: PropTypes.string.isRequired,
  elementFilterType: PropTypes.string.isRequired,
  onClickFilter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
