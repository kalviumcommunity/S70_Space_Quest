import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ShootingStars from "../SpaceComponents/ShootingStars";
import TwinklingStars from "../SpaceComponents/TwinklingStars";
import Galaxies from "../SpaceComponents/Galaxies";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userId: "",
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      setTimeout(() => setError(""), 2000);
      return;
    }

    try {
      const userId = `U${Date.now().toString().slice(-5)}`; // Generates "U12345"-like ID
      const dataToSend = { ...formData, userId };

      const response = await axios.post("http://localhost:3000/users", dataToSend);

      setSuccess(true);
      setUsers([...users, { username: formData.username, email: formData.email }]);
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setTimeout(() => setSuccess(false), 2000);
      setFormData({ username: "", email: "", password: "", userId: "" });
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      setError(errorMessage);
      setTimeout(() => setError(""), 2000);
      console.error("Error creating user:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <TwinklingStars />
      <ShootingStars />
      <Galaxies />

      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full z-10 airlock-door left-0"
        animate={success ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="door-window absolute left-12 top-1/3 w-24 h-24 rounded-full" />
        <div className="door-window absolute left-12 bottom-1/3 w-24 h-24 rounded-full" />
        <div className="door-light absolute left-28 top-1/2 w-4 h-4 bg-red-500 rounded-full animate-blink" />
        <div className="door-light absolute left-44 top-2/3 w-4 h-4 bg-green-500 rounded-full animate-blink-delayed" />
      </motion.div>

      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full z-10 airlock-door right-0"
        animate={success ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="door-window absolute right-12 top-1/3 w-24 h-24 rounded-full" />
        <div className="door-window absolute right-12 bottom-1/3 w-24 h-24 rounded-full" />
        <div className="door-light absolute right-28 top-1/2 w-4 h-4 bg-red-500 rounded-full animate-blink" />
        <div className="door-light absolute right-44 top-2/3 w-4 h-4 bg-green-500 rounded-full animate-blink-delayed" />
      </motion.div>

      <motion.div
        className="bg-gray-800 bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg border border-blue-500/50 max-w-md w-full mx-4 relative z-20 airlock-panel"
        animate={error ? { x: [-10, 10, -10, 0] } : { x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2 font-orbitron">
          Get on a Space Journey
        </h1>
        <p className="text-gray-400 mb-6">Enter your credentials to board</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="w-full p-3 bg-transparent border border-blue-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 glowing-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 bg-transparent border border-blue-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 glowing-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 bg-transparent border border-blue-400 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-500 glowing-input"
            required
          />
          <motion.button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </form>

        {error && (
          <motion.div
            className="mt-4 text-red-500 text-lg font-bold glitch"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {error}
          </motion.div>
        )}

        {success && (
          <div className="mt-4 text-blue-400">
            Welcome Aboard, {formData.username}!
          </div>
        )}
      </motion.div>

      {users.length > 0 && !success && (
        <div className="absolute bottom-4 text-white text-center z-20">
          <h3 className="text-lg font-bold">Crew Members:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                {user.username} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SignUp;