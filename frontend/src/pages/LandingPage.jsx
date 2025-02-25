import React from "react";
import ShootingStars from "../components/LandingPageComponents/ShootingStars";
import TwinklingStars from "../components/LandingPageComponents/TwinklingStars";
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
        
        <Link to="/get-started" className="start-btn">
          Get Started 
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
