const authenticateToken = require('../middlewares/auth');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login page' });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup page' });
});
router.get('/feed',authenticateToken, function(req, res, next) {
  res.render('feed');
});
router.get('/profile',authenticateToken, function(req, res, next) {
  res.render('profile');
});
module.exports = router;
