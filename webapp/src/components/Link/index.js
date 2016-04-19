import React, { PropTypes } from 'react'
import Icon from '../../components/Icon'

const Link = ({ item, text, handleClick, icon }) => (
  <a onClick={(e) => {
    e.preventDefault()
    handleClick(item)
  }}
  >{text}
    <Icon icon={icon} />
  </a>
)

Link.propTypes = {
  handleClick: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  text: PropTypes.string,
  icon: PropTypes.string
}

export default Link
