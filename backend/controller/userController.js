const User = require("../model/userModel");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { username, email, password, userId } = req.body;



    // Validation logic
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!username) {
      return res.status(400).json({ message: "Missing username" });
    }
    if (username.trim() === '') {
      return res.status(400).json({ message: "Invalid username" });
    }
    if (!email) {
      return res.status(400).json({ message: "Missing email" });
    }
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (!password) {
      return res.status(400).json({ message: "Missing password" });
    }
    if (!passwordRegex.test(password)) {
      return res.status(400).json({ message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character" });
    }
  

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = { username, email, password: hashedPassword, userId };
    const user = await User.create(userData);
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      return res.status(409).json({ message: "Username or email already exists" });
    }
    res.status(500).json({ message: "Failed to create user", error: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users", error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userData = req.body;
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user); // Send updated user back
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: "Username or email already exists" });
    }
    res.status(500).json({ message: "Failed to update user", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user", error: error.message });
  }
};

module.exports = { createUser, getUser, updateUser, deleteUser };