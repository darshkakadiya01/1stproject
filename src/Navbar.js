import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="Navbar-main-cntainer">
      <nav className="navbar">
        <img
          src="main-logo.png"
          alt="Logo"
          className="navbar-logo"
        />

        <ul className="navbar-menu">
          <li><b>Home</b></li>
          <li><b>Farm</b></li>
          <li><b>Production</b></li>
          <li><b>About</b></li>
          <li><b>Contact Us</b></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
