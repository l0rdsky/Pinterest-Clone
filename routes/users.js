var express = require('express');
var router = express.Router();
const feedHandler = require('../controller/feedHandler');
const {signUpUserController}=require('../controller/create_user')
const {loginUserController}=require('../controller/loginUserController')
const {upload}=require("../controller/multer");
const {handleUpload}=require("../controller/Handle_upload");
// const {postsController} = require('../controllers/postsController');

/* POST methods users listing. */

router.post('/',signUpUserController);
router.post("/login",loginUserController);
// Route to handle file upload
router.post('/upload', upload.single('file'), handleUpload);
// router.get('/api/posts', postsController.getUserPosts);


// Route to fetch all uploaded images using the feed handler
router.get('/api/feed', feedHandler.getUploadedImages);
module.exports = router;
