import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar-main-container">
      <nav className="navbar">
        <img
          src="/mainlogoyogiwellness.png"
          alt="Logo"
          className="navbar-logo"
        />

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
