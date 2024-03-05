const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
// Controller function to fetch user's posts by ID
exports.getUserPosts = async (req, res) => {
  // Extract user ID from JWT token
  const decoded = jwt.verify(req.cookies.UID, 'Akash@999');
    
  const userId = decoded.userId;
  

  try {
    // Find the user's posts using their ID
    const userPosts = await Post.find({ userId });

    res.json(userPosts);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};
