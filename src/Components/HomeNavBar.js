import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export default function HomeNavBar() {
  const counter = useSelector((state) => state.counter);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Redux
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  HOC
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/formik">
                   Form-Formik-valiation
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
              <h5 style={{ color: "white" }}>My Bank Balance</h5><span style={{ color: "white" }}>{counter}</span>
          </div>
        </div>
      </nav>
    </>
  );
}
