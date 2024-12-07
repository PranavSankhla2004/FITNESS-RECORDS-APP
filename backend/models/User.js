// backend/models/User.js
const mongoose = require('mongoose');

// Define a schema for the User model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    },
    package: {
        type: String, // Name of the package the client is enrolled in
        required: true
    },
    packageStartDate: {
        type: Date,
        required: true
    },
    packageEndDate: {
        type: Date,
        required: true
    },
    // Additional fields for tracking progress, if needed
    caloriesBurned: {
        type: Number,
        default: 0
    },
    attendance: [{
        date: {
            type: Date,
            default: Date.now
        },
        exercisesDone: [{
            type: String // Array of exercises done on this date
        }]
    }]
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
