import React, { PropTypes } from 'react'

const Link = ({ item, linkStyle, text, handleClick }) => (
  <div>
    <a onClick={(e) => {
      e.preventDefault()
      handleClick(item)
    }} style={linkStyle}
    >{text}</a>
  </div>
)

Link.defaultProps = {
  linkStyle: {
    textDecoration: 'underline',
    color: 'blue',
    cursor: 'pointer'
  }
}

Link.propTypes = {
  handleClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  linkStyle: PropTypes.object,
  text: PropTypes.string.isRequired
}

export default Link
