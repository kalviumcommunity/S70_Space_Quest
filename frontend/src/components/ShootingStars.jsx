import { motion } from 'framer-motion'
import React from 'react'
import './ShootingStars.css'

const ShootingStars = () => {
  const starVariants = {
    initial: { x: "100vw", y: "-100vh", opacity: 0 },
    animate: {
      x: "-100vw",
      y: "100vh",
      opacity: 10,
      transition: { duration: 5, ease: "linear", repeat: Infinity },
    },
  }

  return (
    <div className="stars-container">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="shooting-star"
          variants={starVariants}
          initial="initial"
          animate="animate"
          style={{
            position: "absolute",
            width: "5px",
            height: "5px",
            backgroundColor: "white",
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}
    </div>
  )
}

export default ShootingStars