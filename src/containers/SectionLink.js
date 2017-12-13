import React from 'react'
import { NavLink } from 'react-router-dom'

const SectionLink = ({ section, children }) => (
  <NavLink
    exact to={section === 'hot' ? '/' : '/' + section}
  >
    {children}
  </NavLink>
)

export default SectionLink
