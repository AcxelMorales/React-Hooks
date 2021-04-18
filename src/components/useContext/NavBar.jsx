import React from "react";

import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary navbar-expand-sm mb-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          useContext
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
