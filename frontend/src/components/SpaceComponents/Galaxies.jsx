import React from "react";
import "./Galaxies.css";

const Galaxies = () => {
  return (
    <div className="galaxies-container">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="galaxy"
          style={{
            top: `${Math.random() * 80 + 10}vh`,
            left: `${Math.random() * 80 + 10}vw`,
            width: `${Math.random() * 120 + 80}px`, // 80-200px
            height: `${Math.random() * 120 + 80}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Galaxies;