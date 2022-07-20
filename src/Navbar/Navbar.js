import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="container-fluid">
        <ul className="navbar-nav mr-auto">
        <NavLink className="navbar-brand" to="/">
            React
        </NavLink>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <li className="nav-item active">
            <NavLink className="nav-link" to='/formik'>SignUp</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
        </ul>
    </div>
    </div>
  </nav>
    </>
  );
}

export default Navbar;
