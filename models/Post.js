const mongoose = require('mongoose');
const User = require('./user');
const postSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  caption: {
    type: String,
    default: ''
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // Other fields related to the Post model, if needed
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
