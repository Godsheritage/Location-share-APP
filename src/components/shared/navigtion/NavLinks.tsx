import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = () => {
  return (
      <ul className="nav-links">
          <li>
              <NavLink to='/'>All users</NavLink>
          </li>
          <li>
              <NavLink to='/'>my places</NavLink>
          </li>
          <li>
              <NavLink to='/'>Add users</NavLink>
          </li>
          <li>
              <NavLink to='/'>Authenticate</NavLink>
          </li>
      </ul>
  )
}

export default NavLinks