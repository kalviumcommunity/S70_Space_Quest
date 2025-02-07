const express = require('express');
const {createUser, getUser, updateUser, deleteUser} = require('../controller/userController');
const router = express.Router();
// Create a new user
router.post('/users', createUser);

// Get all users
router.get('/users', getUser);

// Update a user by ID
router.put('/users/:id', updateUser);

// Delete a user by ID
router.delete('/users/:id', deleteUser);

module.exports = router;