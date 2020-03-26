import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink exact activeClassName="active" to="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" to="/random">
        Random
      </NavLink>
      <NavLink activeClassName="active" to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Nav;
