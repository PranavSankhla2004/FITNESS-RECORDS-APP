// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user (client)
router.post('/users', async (req, res) => {
    try {
        const { name, email, contact, package, packageStartDate, packageEndDate } = req.body;
        const newUser = new User({
            name,
            email,
            contact,
            package,
            packageStartDate,
            packageEndDate
        });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving users', error });
    }
});

// Get a user by ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: 'Error retrieving user', error });
    }
});

// Update a user's details (e.g., attendance, calories burned)
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(400).json({ message: 'Error updating user', error });
    }
});

// Delete a user
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Error deleting user', error });
    }
});

module.exports = router;
