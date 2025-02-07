const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    progress: {
        type: {
            mission: { type: Number, default: 0 },
            level: { type: Number, default: 0 }
        },
        default: {}
    },
    badges:
    {
        type: [String],
        default: []
    },
    createdAt:
    {
        type: Date,
        default: Date.now
    },
    userId:
    {
        type: String,
        required: true, unique: true
    },
});

const User = mongoose.model('User', userSchema,'Users');
module.exports = User;