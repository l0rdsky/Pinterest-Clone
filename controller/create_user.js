const mongoose = require('mongoose');
const User = require('../models/user'); // Assuming you have a User model defined

// Controller function to handle user signup
async function signUpUserController(req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists with this email' });
    }

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.render('login', { title: 'Login page' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Could not create user' });
  }
}

module.exports = { signUpUserController };
