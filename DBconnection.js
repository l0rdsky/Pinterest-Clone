const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/pinterest_clone'; // Replace with your MongoDB URI

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = db;
