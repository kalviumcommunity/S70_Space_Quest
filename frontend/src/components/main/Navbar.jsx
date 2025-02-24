import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    
      <nav className="navbar">
        <div className="highlight logo"> Space Quest</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/login" className="cta-btn">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>

  );
};

export default Navbar;
