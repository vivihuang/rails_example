import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.scss'

const Navigation = ({ children }) => (
  <div>
    <nav className={style.nav}>
      <h1 className={style.logo}>Vivi</h1>
      <ul>
        <li className={style.item}><Link to='/'>Home</Link></li>
        <li className={style.item}><Link to='/about'>About</Link></li>
      </ul>
    </nav>
    {children}
  </div>
)

Navigation.propTypes = {
  children: PropTypes.object.isRequired
}

export default Navigation
