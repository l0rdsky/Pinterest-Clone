const fs = require('fs');
const path = require('path');

// Function to fetch all uploaded image filenames
exports.getUploadedImages = (req, res) => {
  const uploadDir = './public/images/uploads' ; // Your upload folder path

  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Error reading upload folder' });
    } else {
      const imageFiles = files.filter(file => {
        const fileExtension = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(fileExtension);
      });

      res.json(imageFiles);
    }
  });
};
