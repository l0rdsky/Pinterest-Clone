const multer = require('multer');

// Multer configuration for file storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use original file name for the uploaded file
    }
  });

  // Multer instance with the storage configuration
const upload = multer({ storage: storage });

module.exports= {upload};