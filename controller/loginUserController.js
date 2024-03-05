const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


// Controller function to handle user login without hashing
async function loginUserController(req, res) {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database by email
    const user = await User.findOne({ email });

    if (!user) {
      req.flash('error', 'Incorrect email or password');
    return res.redirect('/'); // Redirect to login page
    }

    // Compare the provided password with the stored password
    if (user.password !== password) {
      req.flash('error', 'Incorrect email or password');
    return res.redirect('/'); // Redirect to login page
    }

    // If authentication is successful, handle your logic (e.g., session creation, JWT token generation)
    // For example, you can create a session or generate a token for authentication
 // Generate JWT token
 const token = jwt.sign({ userId: user._id }, 'Akash@999');

 // Set token as a cookie in the response
 res.cookie('UID', token, {
   httpOnly: true,
   // Other cookie options like secure, domain, etc., can be added here
 });  
 const username = user.username;

 res.render('profile', { username:username });
    //res.status(200).json({ message: 'Login successful', user: user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { loginUserController };
