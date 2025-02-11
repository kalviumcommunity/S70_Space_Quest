import React, { useEffect, useRef } from 'react';
import './TwinklingStars.css';

const TwinklingStars = () => {
  const starsContainerRef = useRef(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    if (!starsContainer) return;

    // Clear existing stars before adding new ones (avoiding duplicates)
    starsContainer.innerHTML = '';

    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`; 
      star.style.left = `${Math.random() * 100}vw`; 
      starsContainer.appendChild(star);
    }
  }, []);

  return <div ref={starsContainerRef} className="twinkling-stars-container"></div>;
};

export default TwinklingStars;
