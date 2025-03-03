import React from "react";
import ShootingStars from "../components/SpaceComponents/ShootingStars";
import TwinklingStars from "../components/SpaceComponents/TwinklingStars";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {

  return (
    <div className="landing-page">
      {/* Background Effects */}
      <TwinklingStars />
      <ShootingStars />

      {/* Hero Section */}
      <div className="hero">
        <h1 className="landing-page-title">
          Welcome to <span className="highlight welcome">Space Quest</span>
        </h1>
        <p className="subheading">
          Explore the cosmos, test your knowledge, and embark on an interstellar journey.
        </p>
        
        <Link 
          to="/sign-up" 
          className="start-btn" 
          style={{ position: "relative", zIndex: 10 }} // Ensure it’s above other elements
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;