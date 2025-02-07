const User = require("../model/userModel");

const createUser = async (req, res) => {
    try {
        const userData = req.body;
        if (!userData.username || !userData.email || !userData.password || !userData.userId) {
            return res.status(400).send({ message: "All fields are required" });
        }
        const user = await User.create(userData);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).send({ message: "No user found" });
        }
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const user = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(400).send(error);
    }
}
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted successfully" });


    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { createUser, getUser, updateUser, deleteUser };