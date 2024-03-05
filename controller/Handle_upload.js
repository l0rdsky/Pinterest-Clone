const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Post = require('../models/Post');

// Handle file upload
exports.handleUpload = async (req, res) => {
  const { caption } = req.body; // Get caption from the request body
  const filename = req.file.filename; // Get the filename from the uploaded file
  
  try {
    
    // Extract user ID from JWT token
    const decoded = jwt.verify(req.cookies.UID, 'Akash@999');
    
    const userId = decoded.userId;
    
    // Create a new post associated with the current user
    const newPost = await Post.create({ filename, caption, userId });

    // Push the new post's ID to the user's posts array
    await User.findByIdAndUpdate(userId, { $push: { posts: newPost._id } });

    res.redirect('/profile');
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
