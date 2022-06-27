import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" aria-current="page" to="/"> Home</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link"  aria-current="page" to="/employee"> Employees</Link>
          </li>
          
        </ul>
      </div>
      <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
    </nav>
  );
};

export default Navbar;