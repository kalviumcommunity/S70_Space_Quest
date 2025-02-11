import React from "react";
import ShootingStars from "../components/ShootingStars";
import TwinklingStars from "../components/TwinklingStars";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background Effects */}
      <TwinklingStars />
      <ShootingStars />

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="highlight logo"> Space Quest</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/login" className="cta-btn">Sign In</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h1 className="landing-page-title">
          Welcome to <span className="highlight welcome">Space Quest</span>
        </h1>
        <p className="subheading">
          Explore the cosmos, test your knowledge, and embark on an interstellar journey.
        </p>
        <Link to="/get-started" className="start-btn">
          Get Started 
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
