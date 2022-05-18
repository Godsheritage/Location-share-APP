import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks: React.FC<any> = ({ onClick }) => {
  return (
    <ul className="nav-links">
      <li onClick={onClick}>
        <NavLink to="/">All users</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/u1/places">my places</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/places/new">Add place</NavLink>
      </li>
      <li onClick={onClick}>
        <NavLink to="/auth">Authenticate</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
