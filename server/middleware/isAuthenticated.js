
// authMiddleware.js

const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Authorization token not found' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    // Attach the user object to the request
    req.user = decoded;
    next();
  });
};

module.exports = { isLoggedIn };