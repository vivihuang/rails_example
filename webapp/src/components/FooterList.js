import React from 'react'
import FilterLink from '../containers/FilterLink'

const FooterList = () =>
(
  <div>
    <FilterLink type="SHOW_ALL">All</FilterLink>
    {', '}
    <FilterLink type="SHOW_ACTIVE">Active</FilterLink>
    {', '}
    <FilterLink type="SHOW_COMPLETED">Completed</FilterLink>
  </div>
)

export default FooterList
