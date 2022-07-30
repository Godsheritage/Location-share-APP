import React from "react";
import './navlinks.scss'
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { contextTypes } from "../../../types";
// import { contextTypes } from "../../types";
// import AuthContext from "../context/AuthContext";

const NavLinks: React.FC<any> = ({ onClick }) => {
  const { isLoggedIn, logout } = useContext(AuthContext) as contextTypes;
  return (
    <ul className="nav-links">
      <li onClick={onClick}>
        <NavLink to="/">All users</NavLink>
      </li>
      {isLoggedIn && (
        <li onClick={onClick}>
          <NavLink to="/u1/places">my places</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li onClick={onClick}>
          <NavLink to="/places/new">Add place</NavLink>
        </li>
      )}
      {!isLoggedIn && (
        <li onClick={onClick}>
          <NavLink to="/auth">Authenticate</NavLink>
        </li>
      )}
      {isLoggedIn && (
        <li onClick={() => logout()}>
          <NavLink to="/">Log Out</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
