import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.scss'

const Navigation = ({ children }) => (
  <div>
    <h1 className={style.logo}>Vivi</h1>
    <ul>
      <li className={style.item}>
        <Link to='/'>Homepage</Link>
      </li>
    </ul>
    {children}
  </div>
)

Navigation.propTypes = {
  children: PropTypes.object.isRequired
}

export default Navigation
