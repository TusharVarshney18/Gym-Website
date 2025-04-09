import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">GymLogo</div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
