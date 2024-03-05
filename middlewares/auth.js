const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.UID;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, 'Akash@999', (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
